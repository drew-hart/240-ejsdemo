const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.render('home.ejs');
});

app.get('/fallinlovewith/:thing', (req, res) => {
  const thing = req.params.thing;
  res.render('love.ejs', {thingVar: thing});
});

app.listen(8080);
