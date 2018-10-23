const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const multer = require('multer');
const session = require('express-session');


// require our database
require('./db/db');

const prisonerController = require('./controllers/prisonersController');
const authController = require('./controllers/authController');

app.use(session({
  secret: 'This is some random secret string',
  resave: false,
  saveUninitialized: false
}));

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(methodOverride('_method'));
app.use('/prisoners', prisonerController);
app.use('/auth', authController);

// this thing..? I forgot i need to no
app.get('/', (req, res) => {
  res.send('This is my Prison App')
});

// The whole thing listens through here:
app.listen(3000, () => {
  console.log('Listening on port 3000')
});