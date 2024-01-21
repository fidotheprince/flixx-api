const express = require('express');
const app = express();
app.set('json spaces', 2); // Add this line
require('dotenv').config();
const fetch = require('node-fetch');

const port = process.env.PORT || 3000;

app.get('/tmdb/:type/:status', (req, res) => {
  
  const { type, status } = req.params; 
  const url = `${process.env.API_URL}${type}/${status}?api_key=${process.env.API_KEY}&language=en-US`

  fetch(url)
    .then(response => response.json())
    .then(data => {
        res.json(data)
    })
    .catch(err => res.status(400).send('Error: ' + err));

});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});