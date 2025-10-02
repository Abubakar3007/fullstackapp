const express = require('express');
const router = express.Router();
const Car = require('../models/Car');
const multer = require('multer');
const path = require('path');

// Multer setup
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

// POST /api/car/sell-car
router.post('/sell-car', upload.array('photos', 20), async (req, res) => {
    try {
        const body = req.body;

        // Parse features JSON if sent as string
        if (body.features && typeof body.features === 'string') {
            body.features = JSON.parse(body.features);
        }

        // Convert uploaded files to string paths
        if (req.files) {
            body.photos = req.files.map(file => `/uploads/${file.filename}`);
        }

        const newCar = new Car(body);
        await newCar.save();

        res.status(201).json({ success: true, message: 'Car listed successfully!', data: newCar });
    } catch (error) {
        console.error('Error saving car:', error);
        res.status(400).json({ success: false, message: 'Error listing car', error: error.message });
    }
});

module.exports = router;
