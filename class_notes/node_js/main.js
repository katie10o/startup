// debugging node

// let x = 1 + 1;

// console.log(x);

// function double(x) {
//   return x * 2;
// }

// x = double(x);

// console.log(x);

const express = require('express');
const app = express();

app.get('/*', (req, res) => {
  res.send({ url: req.originalUrl });
});

const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
