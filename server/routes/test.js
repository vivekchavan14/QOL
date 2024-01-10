const router = require('express').Router();
const Test = require('../models/test.models');
const User = require('../models/users.models');

router.post('/result/submit-score', async (req, res) => {
    try {
      const { userId, scores } = req.body;
  
      // Check if the user exists
      const user = await User.findOne({ username: userId });
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Create new score entries for each domain
      const scoreEntries = Object.entries(scores).map(([domain, score]) => {
        return Test.create({ user: userId, domain, score });
      });
  
      await Promise.all(scoreEntries);
      res.status(201).json({ message: 'Scores submitted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  
router.post('/result/submit-score', async (req, res) => {
    try {
      const { userId, scores } = req.body;
  
      // Check if the user exists
      const user = await User.findOne({ username: userId });
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Create new score entries for each domain
      const scoreEntries = Object.entries(scores).map(([domain, score]) => {
        return Test.create({ user: userId, domain, score });
      });
  
      await Promise.all(scoreEntries);
      res.status(201).json({ message: 'Scores submitted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  router.get('/total-scores/:userId', async (req, res) => {
    try {
      const { userId } = req.params;
  
      // Fetch total scores for a specific user
      const totalScores = await Test.find({ user: userId, domain: 'total' });
      res.status(200).json(totalScores);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

module.exports = router;
