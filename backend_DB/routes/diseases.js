const express = require('express');
const router = express.Router();
const DiseaseData = require('../models/DiseaseData');

// Route 1 for add diseases data into DB enpoints {/adddisease} POST
router.post('/adddisease', async (req, res) => {
	try {
		const { name, description, remedies, exercises, foods_to_eat } = req.body;
		const remediesArray = remedies.split("\n").map(remedy => remedy.trim()); // Split the string by newline characters and remove leading/trailing spaces
		const exercisesArray = exercises.split("\n").map(remedy => remedy.trim());
		const foods_to_eatArray = foods_to_eat.split("\n").map(remedy => remedy.trim());
		const diseaseInfo = new DiseaseData({
			name: name,
			description: description,
			remedies: remediesArray,
			exercises: exercisesArray,
			foods_to_eat: foods_to_eatArray
		});
		const saveDisease = await diseaseInfo.save();
		res.json({ success: 1, saveDisease });

	}
	catch (err) {
		console.log("Error occured!", err);
		res.json("Internal server error!");
	}

});

// Route 2 for deleting disease data by ID {/deletedisease/:id} DELETE
router.delete('/deletedisease/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const deletedDisease = await DiseaseData.findByIdAndDelete(id);
		if (!deletedDisease) {
			return res.status(404).json({ success: false, message: 'Disease data not found' });
		}
		res.json({ success: true, message: 'Disease data deleted successfully' });
	} catch (err) {
		console.log("Error occurred!", err);
		res.status(500).json({ success: false, error: "Internal server error" });
	}
});


// Route3 for fetchiung disease data enpoints {/alldisease} GET
router.get('/alldisease', async (req, res) => {
	try {
		const diseases = await DiseaseData.find({});
		res.json({ success: 1, diseases });
	}
	catch (err) {
		console.log("Error occured!", err);
		res.json("Internal server error");
	}
})


module.exports = router;