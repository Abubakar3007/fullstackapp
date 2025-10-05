const mongoose = require('mongoose');

function arrayLimit(val) {
    return val.length <= 20;
}

const reviewSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
})

const carSchema = new mongoose.Schema({
    title: { type: String, required: true },
    make: { type: String, required: true },
    model: { type: String, required: true },
    body: { type: String, required: true },
    year: { type: Number, required: true },
    condition: { type: String, required: true },
    stock_number: { type: Number },
    vin_number: { type: Number },
    mileage: { type: Number },
    transmission: { type: String, required: true },
    cylinder: { type: String, required: true },
    engine: { type: String },
    fuel_type: { type: String, required: true },
    drive_type: { type: String, required: true },
    door: { type: Number },
    color: { type: String },
    seat: { type: String },
    city_mpg: { type: String },
    highway_mpg: { type: String },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    custom_price: { type: Number },
    after_price: { type: Number },
    location: { type: String, required: true },
    video_url: { type: String },

    photos: {
        type: [String],
        validate: [arrayLimit, '{PATH} exceeds the limit of 20'],
    },

    documents: {
        type: [String],
        validate: [arrayLimit, '{PATH} exceeds the limit of 20'],
    },

    features: {
        power: [{ type: String }],
        comfort: [{ type: String }],
        interior: [{ type: String }],
        exterior: [{ type: String }],
        safety: [{ type: String }],
        entertainment: [{ type: String }],
    },

    // ⭐ Add reviews
    reviews: [reviewSchema],
});

module.exports = mongoose.model('Car', carSchema);
