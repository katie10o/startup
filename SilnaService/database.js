const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('Cluster0');
const userData = db.collection('user')
const mealCollection = db.collection('meal');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

function accountVerify(email){
  return userData.findOne({email : email});
}


async function addUser(person){
  const result = await userData.insertOne(person)
  return result
}

async function mealChecker(meal, userEmail) {
  var currentDate = new Date();
  var isoDate = currentDate.toISOString().split('T')[0];

  const existingMeal = await mealCollection.findOne({
    email: userEmail,
    Date: isoDate,
    Meal: meal.Meal
  });

  if (existingMeal){
    return false;
  } else{
    return true;
  }
}
async function addMeal(meal, userEmail){
  var currentDate = new Date();
  var isoDate = currentDate.toISOString().split('T')[0];

  const update = {
    $push: {"Entry": meal.Entry},
    $set: {"Date": isoDate, "Meal": meal.Meal}
  };

  const result = await mealCollection.updateOne(
    { email: userEmail, Date: isoDate, Meal: meal.Meal },
    update,
    { upsert: true }
  );
  return result;
}


async function deleteMeal(userEmail, mealType){
  var currentDate = new Date();
  var isoDate = currentDate.toISOString().split('T')[0];

    const result = await mealCollection.deleteOne({ 
      email: userEmail,
      Date: isoDate,
      Meal: mealType, 
    });
    return result;

}

async function getMeal(mealType, userEmail) {
  var currentDate = new Date();
  var isoDate = currentDate.toISOString().split('T')[0];

  const query = { email: userEmail, Date: isoDate, Meal: mealType };
  const mealData = await mealCollection.findOne(query);
  return mealData;
}

module.exports = { deleteMeal, mealChecker, accountVerify, addUser, addMeal, getMeal };