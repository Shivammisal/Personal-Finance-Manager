const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = require('./routes');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/personalfinance');

app.use('/api', router);

app.listen(8080, () => {
  console.log('Server started on port 8080');
});