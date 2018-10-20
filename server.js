// This is where we must Aquire:
const express         = require('express');
const app             = express();
const bodyParser      = require('body-parser');
const methoodOverride = require('method-override');
// get the database talking:
require('./db/db');

// Requiring the middle-ware can me tricky:
// const cellControllers  = require('./controllers/cell');

// make sure to require this before our controller
app.use(bodyParser.urlencoded({extended: false}));
app.use(methoodOverride('_method'));

//setting up the middle-ware for our controllers
// where every route will start with /cells
// app.use('/cells', cellsController);

// this thing..? I forgot i need to no
app.get('/', (req, res) => {
  res.send('This is my Prison App')
});

// The whole thing listens through here:
app.listen(3000, () => {
  console.log('Listening on port 3000')
});
