const express = require('express');
const app = express();
const cors = require('cors'); 
app.use(cors());
app.set('json spaces', 2);
require('dotenv').config();

const fetch = require('node-fetch');

const port = process.env.PORT || 3000;

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`); 
});


app.get('/resource/:type/:status', (req, res) => {
  const { type, status } = req.params; 

  const url = `${process.env.API_URL}${type}/${status}?api_key=${process.env.API_KEY}&language=en-US`

  fetch(url)
    .then(response => response.json())
    .then(data => res.json(data))
    .catch(err => res.status(400).send('Error: ' + err));
});

app.get('/search/:type', (req, res) => {
    const { type } = req.params;
    const { query, page } = req.query;

    const url = `${process.env.API_URL}search/${type}?query=${query}&api_key=${process.env.API_KEY}&language=en-US&page=${page}`

    fetch(url)
    .then(response => response.json())
    .then(data => res.json(data))
    .catch(err => res.status(400).send('Error: ' + err));
});

app.get('/details/:type/:id', (req, res) => {
    const { type, id } = req.params;
    const url = `${process.env.API_URL}${type}/${id}?api_key=${process.env.API_KEY}&language=en-US`

    fetch(url)
    .then(response => response.json())
    .then(data => res.json(data))
    .catch(err => res.status(400).send('Error: ' + err));
});