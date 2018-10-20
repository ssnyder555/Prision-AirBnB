const mongoose    = require('mongoose');

const cellsSchema = new mongoose.Schema({
  title: String,
  body:  String
});

module.exports     = mongoose.model('Cells', cellsSchema);
