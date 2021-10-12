const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/todos');

const db = mongoose.connection;

db.on('error',console.error.bind(console, "Error in connecting database"));

db.once('open', () => {
    console.log('connected to dataBase');
})

module.exports = db;