// index.js is the first file (like index.html)
///Users/katieklabacka/.nvm/versions/node/v20.9.0/bin/node - node location

// function countdown() {
//     let i = 0;
//     while (i++ < 5){
//         console.log(`Counting ... ${i}`);
//     }
// }

// countdown();






// fetch('https://api.quotable.io/random')
//   .then((response) => response.json())
//   .then((jsonResponse) => {
//     console.log(jsonResponse);
//   });






//   fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'test title',
//     body: 'test body',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((jsonResponse) => {
//     console.log(jsonResponse);
//   });


const express = require('express');
const app = express();

app.listen(8080);

app.get('/store/:storeName', (req, res, next) => {
    res.send({name: req.params.storeName});
  });