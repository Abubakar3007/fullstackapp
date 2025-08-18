// user name , email , password , confirm password
const mongoose = require('mongoose'); // for database connection
const bcrypt = require('bcryptjs'); // for password encryption

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // You're using this field to store "ID: ..., Email: ..."
    location: { type: String, default: '' },
    avatar: { type: String, default: '' },
    firstName: { type: String },
    lastName: { type: String },
    description: { type: String },
    phone: { type: Number },
    address: { type: String, default: '' },
    website: { type: String },
    facebook: { type: String },
    instagram: { type: String },
    twitter: { type: String },
    skype: { type: String },
});

// Hash password
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

module.exports = mongoose.model('User', userSchema);