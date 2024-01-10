const router = require('express').Router();
const Test = require('../models/test.models');
const User = require('../models/users.models');

router.post('/submit-score', async (req, res) => {
    try {
        const { userId, domain, score } = req.body;

        // Check if the user exists
        // const user = await User.findById(userId);
        const user = await User.findOne({ username: userId });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Create a new score entry
        const newScore = await Test.create({ user: userId, domain, score });
        res.status(201).json(newScore);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
