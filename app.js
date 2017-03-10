const express = require('express');
const request = require('request');

const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('search');
});
app.get('/results', (req, res) => {
  const query = req.query.term;
  const base = 'http://www.omdbapi.com/?s=';
  const url = base + query;

  request(url, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const data = JSON.parse(body);
      res.render('results', { data });
    }
  });
});

app.listen(8080, () => {
  console.log('Application started...');
});
