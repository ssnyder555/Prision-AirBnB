const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');


// require our database
require('./db/db');

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(methodOverride('_method'));





app.get('/', (req, res) => {
  res.send('This is my Prison App')
});

app.listen(3000, () => {
  console.log('Listening on port 3000')
});