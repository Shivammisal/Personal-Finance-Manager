const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
  res.send('Hello from the server!');
});

router.post('/test', (req, res) => {
  const { name, age } = req.body;
  console.log(`Received POST request with name: ${name} and age: ${age}`);
  res.send('POST request received successfully!');
});

router.get('/data', (req, res) => {
  // Retrieve data from the database or a data source
  const data = [
    { id: 1, name: 'abi', age: 21 },
    { id: 2, name: 'omkar', age: 22 },
    { id: 3, name: 'shivam', age: 20 }
  ];
  res.send(data);
});

module.exports = router;