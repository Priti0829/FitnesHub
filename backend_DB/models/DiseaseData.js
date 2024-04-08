const mongoose = require('mongoose');
const { Schema } = mongoose;

const DiseaseSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	remedies: {
		type: [String],
		required: true
	},
	exercises: {
		type: [String],
		required: true
	},
	foods_to_eat: {
		type: [String],
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('diseasedatas', DiseaseSchema);