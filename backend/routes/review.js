const express = require('express');
const router = express.Router();
const Car = require('../models/Car');

router.post('/:id/review/',async(req,res)=>{
    try{
        const {rating,message,userId} = req.body;
        const car = await Car.findById(req.params.id);
        if (!car) return res.status(404).json({ message: "Car not found" });

        const review = {
            user: userId,
            rating,
            message,
            createdAt: new Date(),
          };
      
          car.reviews.push(review);
      
          await car.save();
      
          res.status(201).json({ message: "Review added", car });
    }
    catch(err){
        console.log(err);
        res.status(500).json({message:err.message});
    }
});

router.get('/:id/review', async (req, res) => {
  try {
    const car = await Car.findById(req.params.id).populate('reviews.user', 'username email'); 
    if (!car) return res.status(404).json({ message: "Car not found" });

    res.json(car.reviews);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;