const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET);
const Boost = require('../models/Boost');

// POST /api/create-boost-session
router.post('/create-boost-session', async (req, res) => {
  const { storyId, amount, email } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Boost TennisLore Story',
            },
            unit_amount: amount, // 200 = $2
          },
          quantity: 1,
        },
      ],
    mode: 'payment',
    success_url: `http://localhost:5173/boost-success?storyId=${storyId}&email=${email}`,
    cancel_url: `http://localhost:5173/boost-failed`,

    });

    res.send({ url: session.url });
  } catch (err) {
    console.error('Stripe error:', err);
    res.status(500).send('Failed to create Stripe session');
  }
});

// GET /api/boost-status
router.get('/boost-status', async (req, res) => {
  const { storyId, email } = req.query;

  try {
    let boost = await Boost.findOne({ storyId, email });
    if (!boost) {
      boost = await Boost.create({ storyId, email, date: new Date() });
    }

    res.json({ boosted: true });
  } catch (err) {
    console.error('Boost status error:', err);
    res.status(500).send('Failed to check or register boost status');
  }
});


module.exports = router;

