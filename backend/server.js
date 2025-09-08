const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');
const updateRouter = require('./routes/update-profile');
const carRouter = require('./routes/car');
const cors = require('cors');

// Enable CORS
dotenv.config();
const app = express();
app.use(express.json()); // parse JSON request bodies

app.use(cors());

const PORT = 5000; // define port

// Middleware
app.use(express.json()); // to parse incoming JSON requests

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Connect mongo database
const database_URL = "mongodb+srv://bakardeveloper0007:bakar123@cluster0.fgsm5nx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(database_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
}).then(() => {
    console.log("MongoDB connected successfully");

}).catch((err) => {
    console.error('MongoDB connection error:', err);
});


// register
app.use('/api/auth', registerRouter);
// Login
app.use('/api/auth', loginRouter);
// update profile
app.use('/api/auth', updateRouter);
// sell car
app.use('/api/car',carRouter);

