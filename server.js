const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const multer = require('multer');
const session = require('express-session');


// require our database
require('./db/db');


// Requiring the middle-ware can me tricky:
const cellControllers = require('./controllers/cellsController');
const prisonerController = require('./controllers/prisonersController');
const authController = require('./controllers/authController');


app.use(express.static('public'));
app.use(session({
  secret: 'This is some random secret string',
  resave: false,
  saveUninitialized: false
}));


// setting up the middle-ware for our controllers
// where every route will start with /cells


app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(methodOverride('_method'));
app.use('/cells', cellControllers);
app.use('/prisoners', prisonerController);
app.use('/auth', authController);


// this thing..? I forgot i need to no
app.get('/', (req, res) => {
  res.render('index.ejs');
});

// The whole thing listens through here:
app.listen(3000, () => {
  console.log('Listening on port 3000')
});