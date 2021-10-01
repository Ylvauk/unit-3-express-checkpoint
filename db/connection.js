require('dotenv').configure();
const mongoose = require('mongoose');
const mongoURI = process.env.DATABASE_URL;
mongoose.connect(mongoURI);

module.exports = mongoose;
