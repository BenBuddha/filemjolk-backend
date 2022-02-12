require('dotenv').config();
const mongoose = require('mongoose');

function connectDB() {
    //database connection
    mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    const connection = mongoose.connection;
}

mongoose.connection
    .once('open', () => console.log('Connected to MongoDB'))
    .on('error', error => {
    console.log('error!', error)
})

module.exports = connectDB;