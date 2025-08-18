const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const User = require('../models/User');

router.post('/update-password', async (req, res) => {
    const { oldPassword, newPassword } = req.body;

    try {
        const isMatch = await bcrypt.compare({ password, })
    }
    catch (error) {

    }
})