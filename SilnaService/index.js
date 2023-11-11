const express = require('express');
const app = express();
let users = {};
let meals = {};
let nutrients = {};

// The service port. In production the frontend code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the frontend static content hosting
app.use(express.static('/Users/katieklabacka/Desktop/school/cs/CS260/startup/SilnaService/public'));

// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);

apiRouter.post('/createAcnt', (req, res) => {
// adding a new user, for now will store in global variable
  const { firstName, lastName, email, password } = req.body;

  if (users[email]){
    return res.status(400).send({message: 'Email is taken'});
  }

  const newUser = {
    firstName,
    lastName,
    password
  };

  users[email] = newUser;

  res.send({message: 'Account created successfully!', user: {email} });
  
});

apiRouter.post('/login', (req, res) => {
//authenticating the user
const { email, password } = req.body;

if (users[email] && users[email].password == password){
  res.send({message: 'Success loging in!', user: {email}});
} else {
    return res.status(400).send({message: 'Invalid email or password'});
  }

});

apiRouter.post('/enterFood', (req, res) => {
//food input from the user 
//store it in the table and send it to nutrient api
const { mealType, items} = req.body;

if (!mealType || !items || !Array.isArray(items)) {
  return res.status(400).send({message: 'Invalid food entry'});
} 
if (meals[mealType]){
  meals[mealType] = meals[mealType].concat(items);
} else {
  meals[mealType] = items;
}

nutrients[mealType] = items.map(item => {
  return {
    item: item,
    nutrients: {
      protein: Math.floor(Math.random() * 50) + 'g',
      carbs: Math.floor(Math.random() * 100) + 'g',
      fats: Math.floor(Math.random() * 50) + 'g'
    }
  };

  });

res.send({message: 'Food successfully entered!', mealType, items});

});


apiRouter.get('/nutrients', (req, res) => {
//communication with nutrient api
//send/store data in table

const { mealType } = req.query;

if (!mealType || !nutrients[mealType]) {
  return res.status(400).send({message: 'no data for meal type entered'});
}

res.send(nutrients[mealType]);

});


// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});