const mongoose = require('mongoose');

const voteSchema = new mongoose.Schema({
  storyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Story',
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Vote', voteSchema);
