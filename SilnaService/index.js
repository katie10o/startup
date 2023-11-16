const express = require('express');
const { OpenAI } = require("openai");
require ("dotenv").config();
const DB = require('./database.js');

const app = express();

const openai = new OpenAI(process.env.OPENAI_API_KEY);

// The service port. In production the frontend code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the frontend static content hosting
// need to take this string out and just do /public
app.use(express.static('public'));

// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);



apiRouter.post('/createAcnt', async (req, res) => {

  const { firstName, lastName, email, password } = req.body;
  
  const exists = await DB.accountVerify(email);
  if (exists) {
    return res.status(400).send({message: "email is taken"});
  }

  const newUser = {
    firstName : firstName,
    lastName : lastName,
    email : email,
    password : password
  };

  DB.addUser(newUser)

  res.send({message: 'Account created successfully!', user: {email} });
  
});

apiRouter.post('/login', async (req, res) => {
//authenticating the user
const { email, password } = req.body;
const matchedEmail = await DB.accountVerify(email)
try {
  if (!matchedEmail) {
    return res.status(404).send({message: 'Invalid email'});
  }
  if (matchedEmail.password !== password){
    return res.status(404).send({message: 'Invalid password'});
  }
  res.send({message: 'Success logging in!', user: {email}});
} catch (error){
  res.status(500).send({message: "an arror occurred"})
}

});

apiRouter.post('/enterFood', async (req, res) => {
  //food input from the user 
  //store it in the table and send it to nutrient api
  const { mealType, items } = req.body;

  if (!mealType || !items || !Array.isArray(items)) {
      return res.status(400).send({ message: 'Invalid food entry' });
  }


  try {
      const nutrientResults = await Promise.all(items.map(async (item) => {
          const completion = await openai.chat.completions.create({
              model: "gpt-3.5-turbo-1106",
              response_format: {"type": "json_object"},
              messages: [
                  { role: "user", content: item },
                  { role: "system", content: "give me the nutrients of this item in the form of a JSON object that contains no \\n space. provide each type of fat with its metric value, each type of protein and its metric value, each type of vitamin and its metric value, each type of mineral and its metric value, and each type of carb and its metric value if possible. {'nutrientType; : 'metric value', 'nutrientType' : 'metric value'}" }
              ],
          });

          const nutrientData = completion.choices[0].message.content;

          return {
              item: item,
              nutrients: nutrientData
          };
      }));

      return res.send({ message: 'Food successfully recieved!', mealType, items, nutrients: nutrientResults });
  } catch (error) {
      console.error("Error processing food entry: ", error);
      return res.status(500).send({ message: 'Error processing food entry' });
  }
});

apiRouter.post('/enteredNutrients', async (req, res) => {
  const { nutrient } = req.body;

  if (!nutrient) {
      return res.status(400).send({ message: 'Nutrient is required' });
  }

  try {
      const completion = await openai.chat.completions.create({
          model: "gpt-3.5-turbo-1106",
          response_format: {"type": "json_object"},
          messages: [
              { role: "user", content: nutrient },
              { role: "system", content: "Give me a JSON object containing a list of 5 food items that contain this nutrient. { nutrient : type of nutrient, foods: [list of food]" }
          ],
      });

      const foodData = completion.choices[0].message.content;
      const foodDataObj = JSON.parse(foodData);
      return res.send({ message: 'Food successfully retrieved!', foodData: foodDataObj });
  } catch (error) {
      console.error("Error processing nutrient entry: ", error);
      return res.status(500).send({ message: 'Error processing nutrient entry' });
  }
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});