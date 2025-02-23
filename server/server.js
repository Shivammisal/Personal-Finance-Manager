const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');
require('../routes')(app);

app.use(bodyParser.json());

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost/personalfinance', { useNewUrlParser: true, useUnifiedTopology: true });

// Use the routes as a middleware
app.use('/api', routes);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});