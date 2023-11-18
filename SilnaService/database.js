const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');
const bcrypt = require('bcrypt');
const uuid = require('uuid');

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


async function addUser(firstName, lastName, email, password){
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userData.insertOne(user);

  return user;

}

async function mealChecker(meal, userEmail) {
  var currentDate = new Date();
  var isoDate = currentDate.toISOString().split('T')[0];

  const existingMeal = await mealCollection.findOne({
    Date: isoDate,
    email: userEmail,
    Meal: meal.Meal, 
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

  const addMealEntry = {
    Date: isoDate,
    Meal: meal.Meal,
    email: userEmail,
    Entry: meal.Entry
  }

  const result = await mealCollection.insertOne(addMealEntry)

  return result;
}


async function deleteMeal(userEmail, mealType){
  var currentDate = new Date();
  var isoDate = currentDate.toISOString().split('T')[0];

    const result = await mealCollection.deleteOne({ 
      Date: isoDate,
      Meal: mealType, 
      email: userEmail,
    });
    return result;

}

async function getMeal(mealType, userEmail) {
  var currentDate = new Date();
  var isoDate = currentDate.toISOString().split('T')[0];


  const query = { email: userEmail, Date: isoDate, Meal: mealType };
  const mealData = await mealCollection.findOne(query);
  if(mealData){
    return mealData;
  }
  return false;
}
async function getUserInfo(email){
  const query = {email: email};
  const userInfo = await userData.findOne(query);
  return userInfo;
 }

module.exports = { getUserInfo, deleteMeal, mealChecker, accountVerify, addUser, addMeal, getMeal };