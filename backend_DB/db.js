const mongoose = require('mongoose');
const URI = 'mongodb://127.0.0.1:27017/fitnessDB';

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