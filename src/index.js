const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the Node.js CI/CD Pipeline Example!');
});

module.exports = app;
