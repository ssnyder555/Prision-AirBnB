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

app.get('/', (req, res) => {
  res.send('This is my Prison App')
});

app.listen(3000, () => {
  console.log('Listening on port 3000')
});