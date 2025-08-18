const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs'); // for password comparison

const User = require('../models/User');

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            console.log("Email not registered")
            return res.status(400).json({ message: "User not registered" });
        }

        // Compare hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid password" });
        }

        // Successful login
        res.status(200).json({ message: "Login successful", user: { id: user._id, email: user.email } });

    } catch (err) {
        console.error('Register Error:', err.message);
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

module.exports = router;