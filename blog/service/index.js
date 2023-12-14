const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const DB = require('./database.js');
const { peerProxy } = require('./peerProxy.js');
const cors = require('cors');


const authCookieName = 'token';

const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(cors({
    origin: 'http://localhost:3000' // Replace with your frontend's origin
}));

// JSON body parsing using built-in middleware
app.use(express.json());
app.use(cookieParser());

// Serve up the frontend static content hosting
// need to take this string out and just do public
app.use(express.static('public'));
app.set('trust proxy', true);

// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);

apiRouter.post('/createAcnt', async (req, res) => {

    const { firstName, lastName, email, password } = req.body;
    
    const exists = await DB.accountVerify(email);
    if (exists) {
      return res.status(409).send({message: "email is taken"});
    }
  
    try {
      const user = await DB.addUser(firstName, lastName, email, password);
      setAuthCookie(res, user.token);
  
      res.send({message: 'Account created successfully!', user: {email} });
      
    } catch (error) {
      res.status(500).send({message: 'Error creating account'});
    }
    
  });
  
  apiRouter.delete('/logout', (_req, res) => {
    res.clearCookie(authCookieName);
    res.status(204).end();
  });
  
  apiRouter.post('/login', async (req, res) => {
  //authenticating the user
  const { email, password } = req.body;
  const matchedEmail = await DB.accountVerify(email)
  if (matchedEmail) {
    if (await bcrypt.compare(password, matchedEmail.password)) {
      setAuthCookie(res, matchedEmail.token);
      res.send({message: 'Success logging in!', user: {email}});
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
  });

  function setAuthCookie(res, authToken) {
    res.cookie(authCookieName, authToken, {
      secure: true,
      httpOnly: true,
      sameSite: 'strict',
    });
  }


  app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
  });
  
  const httpService = app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  
  peerProxy(httpService);