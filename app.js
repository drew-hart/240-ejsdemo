const express = require('express');

const app = express();
app.use(express.static('public'));
app.use(express.static('views/'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/friends', (req, res) => {
  res.render('friends');
});
app.listen(8080);
