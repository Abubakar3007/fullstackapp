const express = require("express");
const router = express.Router();

const User = require('../models/User');

router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Check if user already exists
        const existUser = await User.findOne({ email });
        if (existUser) {
            return res.status(400).json({ message: "User already registered" });
        }

        // Create new user
        const newUser = new User({ username, email, password });
        await newUser.save();

        // Update location with user ID and email
        newUser.location = `ID: ${newUser._id}, Email: ${newUser.email}`;
        await newUser.save(); // save again after location update

        res.status(201).json({ message: "User successfully registered", user: newUser });
    } catch (err) {
        console.error('Register Error:', err.message);
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

module.exports = router;
