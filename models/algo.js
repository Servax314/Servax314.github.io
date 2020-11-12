const mongoose = require('mongoose');

const AlgoSchema = new mongoose.Schema({
  title:{
    type: String,
    required: true
  },
  description:{
    type: String,
    required: true
  }
});

const Algo = mongoose.model('Algo',AlgoSchema);
module.exports = Algo;
