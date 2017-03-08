const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

const friends = ['Tony', 'Miranda', 'Justin', 'Pierre', 'Lily'];

app.get('/', (req, res) => {
  res.render('home');
});

app.post('/addfriend', (req, res) => {
  friends.push(req.body.name);
  res.redirect('/friends');
});

app.get('/friends', (req, res) => {
  res.render('friends', { friends: friends });
});
app.listen(8080);
