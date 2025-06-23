const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const storyRoutes = require('./routes/storyRoutes');
const voteRoutes = require('./routes/voteRoutes');
const paymentRoutes = require('./routes/paymentRoutes');

const app = express();


app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));


app.use('/api', storyRoutes);
app.use('/api', voteRoutes);
app.use('/api', paymentRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
