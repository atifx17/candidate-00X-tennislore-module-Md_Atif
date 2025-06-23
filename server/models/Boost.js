const mongoose = require('mongoose');

const boostSchema = new mongoose.Schema({
  storyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Story',
    required: true
  },
  email: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    default: 200
  },
  boostedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Boost', boostSchema);
