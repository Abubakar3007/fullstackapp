const express = require("express");
const router = express.Router();
const User = require('../models/User');

router.post('/forget-password', async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User oe registered" });
        }

        // if user register send forget password link on email and user click link on email
        // then will redirect on reset password page

    } catch (error) {

    }
})