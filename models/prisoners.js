const mongoose = require('mongoose');

const prisonersSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
})

module.exports = mongoose.model('Prisoner', prisonersSchema);