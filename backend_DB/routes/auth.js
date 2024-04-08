const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// JWT token
const secret_ecom = "fitness_JWT_Token";


// Routes 1 : endpoints for creating user
router.post('/createuser', async (req, res) => {
	// check if user already exist
	try {
		let check = await User.findOne({ email: req.body.email });
		if (check) {
			return res.status(400).json({ success: false, error: "The user with this email already exists.." });
		}
		// creating hash of password and then stroing them into databse 
		const salt = await bcrypt.genSalt(10);
		const secPass = await bcrypt.hash(req.body.password, salt);

		const user = await User.create({
			name: req.body.name,
			email: req.body.email,
			password: secPass,
		});

		await user.save();

		const data = {
			user: {
				id: user.id
			}
		}

		const token = jwt.sign(data, secret_ecom);
		res.json({
			success: true,
			token
		})
	}
	catch (err) {
		console.log("Error occured", err);
		res.json("Internal server error");
	}
});

//Route 2 : endpoints for login 
router.post('/login', async (req, res) => {
	try {
		let user = await User.findOne({ email: req.body.email });
		if (!user) {
			return res.status(400).json({ success: false, error: "please enter valid creadentials" });
		}

		//if email present
		const passwordCompare = await bcrypt.compare(req.body.password, user.password);
		// if wrong password
		if (!passwordCompare) {
			return res.status(400).json({ success: false, error: "please enter valid creadentials" });
		}
		// if all things are correct login with sending auth token
		const data = {
			user: {
				id: user.id
			}
		}
		const token = jwt.sign(data, secret_ecom);
		res.json({ success: true, token });

	} catch (error) {
		console.log(error.message);
		res.status(500).send("Internal error from server");
	}

});

module.exports = router;