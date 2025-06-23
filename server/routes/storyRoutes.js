const express = require('express');
const router = express.Router();
const Story = require('../models/Story'); 
const Vote = require('../models/Vote');

// POST /api/story-submit
router.post('/story-submit', async (req, res) => {
  try {
    const { name, email, date, story } = req.body;
    await Story.create({ name, email, date, story });
    res.status(200).send("✅ Story submitted!");
  } catch (err) {
    console.error("Error submitting story:", err);
    res.status(500).send("❌ Please try again.");
  }
});

// POST /api/story-vote
router.post('/story-vote', async (req, res) => {
  try {
    const { storyId, email } = req.body;
    const existing = await Vote.findOne({ storyId, email });
    if (existing) return res.status(400).send("Already voted");

    await Vote.create({ storyId, email });
    await Story.findByIdAndUpdate(storyId, { $inc: { votes: 1 } });
    res.status(200).send("Voted");
  } catch (err) {
    console.error("Vote error:", err);
    res.status(500).send("Vote failed");
  }
});

// GET /api/story/:id/votes
router.get('/story/:id/votes', async (req, res) => {
  try {
    const story = await Story.findById(req.params.id);
    if (!story) return res.status(404).json({ error: 'Story not found' });

    res.json({ votes: story.votes });
  } catch (err) {
    console.error('Error fetching votes:', err);
    res.status(500).json({ error: 'Failed to get votes' });
  }
});

// GET /api/stories
router.get('/stories', async (req, res) => {
  try {
    const stories = await Story.find().sort({ createdAt: -1 });
    res.json(stories);
  } catch (err) {
    console.error(err);
    res.status(500).send('Failed to load stories');
  }
});


module.exports = router;
