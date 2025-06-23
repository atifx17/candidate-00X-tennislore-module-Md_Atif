const express = require('express');
const router = express.Router();
const Vote = require('../models/Vote');
const Story = require('../models/Story');

// POST /api/story-vote
router.post('/story-vote', async (req, res) => {
  const { storyId, email } = req.body;

  if (!storyId || !email) {
    return res.status(400).json({ error: 'Missing storyId or email' });
  }

  try {
    const alreadyVoted = await Vote.findOne({ storyId, email });
    if (alreadyVoted) {
      return res.status(400).json({ message: 'You have already voted for this story.' });
    }
    await Vote.create({ storyId, email });
    
    await Story.findByIdAndUpdate(storyId, { $inc: { votes: 1 } });

    res.status(200).json({ message: 'Vote recorded successfully.' });
  } catch (error) {
    console.error('Vote error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
