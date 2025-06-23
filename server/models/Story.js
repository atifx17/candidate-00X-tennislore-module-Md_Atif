const mongoose = require('mongoose');

const StorySchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    date: String,
    story: String,
    votes: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Story', StorySchema);
