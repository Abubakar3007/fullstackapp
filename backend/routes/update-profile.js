const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Update user profile
router.post('/update-profile', async (req, res) => {
    const {
        userId, avatar, firstName, lastName, email, description,
        phone, location, website, facebook, instagram, twitter, skype
    } = req.body;

    if (!userId) {
        return res.status(400).json({ msg: 'User ID is required' });
    }

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        // Update fields only if they exist in the request
        const fieldsToUpdate = {
            avatar, firstName, lastName, email,
            description, phone, location,
            website, facebook, instagram, twitter, skype
        };

        for (const key in fieldsToUpdate) {
            if (fieldsToUpdate[key] !== undefined) {
                user[key] = fieldsToUpdate[key];
            }
        }
        await user.save();

        res.json({ msg: 'Profile updated successfully', user });
    } catch (error) {
        console.error('❌ Error updating profile:', error.message);
        res.status(500).json({ msg: 'Server Error', error: error.message });
    }
});

module.exports = router;
