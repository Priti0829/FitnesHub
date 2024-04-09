const mongoose = require('mongoose');
require('dotenv').config();

const URI = process.env.MONGODB_URI;


const connectToMongoDB = () => {
	mongoose.connect(URI);
	if (mongoose.connection) {
		console.log("DB connected successfully !!");
	}
	else {
		console.log("errors to connect with DB");
	}
}

module.exports = connectToMongoDB;