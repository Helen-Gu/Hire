const express = require('express');
// a password hashing method
const bcrypt = require('bcryptjs');
// an implementation of JSON Web Tokens
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');

// Load input validation
const validateRegisterInput = require('../services/validation/register');
const validateLoginInput = require('../services/validation/login');

// Load User model
const UserModel = require('../models/User');
const router = express.Router();

// @route POST api/users/register
// @desc Register user
// @access Public
router.post('/register', (req, res) => {
	// Form validation
	const { errors, isValid } = validateRegisterInput(req.body);

	// Check validation
	if (!isValid) {
		return res.status(400).json(errors);
	}

	const {
		firstName,
		lastName,
		email,
		city,
		password,
		userType,
		phone,
		company,
	} = req.body;

	// look up one document
	UserModel.findOne({ email }).then((user) => {
		if (user) {
			return res.status(400).json({ email: 'Email already exists' });
		} else {
			const userModel = new UserModel({
				firstName,
				lastName,
				email,
				city,
				password,
				userType,
				phone,
				company,
			});

			// Hash password before inserting in DB
			bcrypt.genSalt(10, (err, salt) => {
				bcrypt.hash(userModel.password, salt, (err, hash) => {
					if (err) {
						throw err;
					}
					userModel.password = hash;
					userModel
						.save()
						.then((user) => res.json(user)) // send a JSON response
						.catch((err) => console.log(err));
				});
			});
		}
	});
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post('/login', (req, res) => {
	// Form validation
	const { errors, isValid } = validateLoginInput(req.body);
	if (!isValid) {
		return res.status(400).json(errors);
	}

	const { email, password } = req.body;

	// check if user exists
	UserModel.findOne({ email }).then((user) => {
		// Check if user exists
		if (!user) {
			return res.status(404).json({ emailnotfound: 'Email not found' });
		}

		// check password
		bcrypt.compare(password, user.password).then((isMatch) => {
			if (isMatch) {
				// User matched
				// Create JWT Payload
				const payload = {
					id: user.id,
					firstName: user.firstName,
					lastName: user.lastName,
					userType: user.userType,
				};

				// Sign token
				jwt.sign(
					payload,
					keys.secretOrKey,
					{
						expiresIn: 31556926, // 1 year in seconds
					},
					(err, token) => {
						// if successful, append the token into a Bearer string
						res.json({
							success: true,
							token: 'Bearer ' + token,
						});
					}
				);
			} else {
				return res
					.status(400)
					.json({ passwordincorrect: 'Password incorrect' });
			}
		});
	});
});

module.exports = router;
