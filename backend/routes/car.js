const express = require('express');
const router = express.Router();
const Car = require('../models/Car');

router.post('/sell-car', async (req, res) => {

    try {
        const carData = req.body;
        const newCar = new Car(carData);

        await newCar.save();
        res.status(201).json({
            success: true,
            message: 'Car listed successfully!',
            data: newCar
        });
    }
    catch (error) {
        console.error('Error saving car:', error);
        res.status(400).json({
            success: false,
            message: 'Error listing car',
            error: error.message
        });
    }
});

module.exports = router;