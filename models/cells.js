const mongoose    = require('mongoose');

const cellsSchema = new mongoose.Schema({

  name: String,
  capacity: Number

});
// numberOfPrisonCells: {
//   type: Number,
//   required: true
// },
// durationOfStay: Number,
// compadableWithOthers: Boolean
// cellNumber: String
// });

module.exports = mongoose.model('Cells', cellsSchema);
