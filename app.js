const express = require('express');

const app = express();
app.use(express.static('public'));
app.use(express.static('views/'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/fallinlovewith/:thing', (req, res) => {
  const thing = req.params.thing;
  res.render('love', { thingVar: thing });
});

app.listen(8080);
