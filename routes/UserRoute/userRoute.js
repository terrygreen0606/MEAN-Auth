const express = require("express");
const router = express.Router();
const passport = require("passport");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const nodeoutlook = require("nodejs-nodemailer-outlook");

// Import User Model
const User = require("../../models/authModel/userModel");

// POST      /users/register      This url comes from server.js Use Routes so it's of no need to insert this url again in the router.get('')
// Get      Register a user
// @access  Public
router.post("/register", (req, res) => {
	const { first_name, last_name, username, email, password } = req.body;
	const resetPasswordToken = "";
	const resetPasswordExpires = "";

	// Simple Validation
	if (!first_name || !last_name || !username || !email || !password) {
		return res.json({ success: false, msg: "Please enter all fields." });
	}

	// Check for existing user
	User.findOne({ email }).then(user => {
		if (user) {
			return res.json({
				success: false,
				msg: "That email already exists."
			});
		}

		const newUser = new User({
			first_name,
			last_name,
			username,
			email,
			password,
			resetPasswordToken,
			resetPasswordExpires
		});

		// Hash -- Create salt
		bcrypt.genSalt(10, (err, salt) => {
			bcrypt.hash(newUser.password, salt, (err, hash) => {
				if (err) throw err;

				newUser.password = hash;

				newUser.save().then(user => {
					jwt.sign(
						{ id: user._id },
						config.get("jwtSecret"),
						{ expiresIn: 3600 },
						(err, token) => {
							if (err) throw err;
							res.json({
								success: true,
								token: "JWT " + token,
								user: {
									id: user._id,
									username: user.username,
									email: user.email
								}
							});
						}
					);
				});
			});
		});
	});
});

// POST      /users/login                              This url comes from server.js Use Routes so it's of no need to insert this url again in the router.get('')
// Get      Auth user when login
// @access  Public
router.post("/login", (req, res) => {
	const { email, password } = req.body;

	// Simple Validation
	if (!email || !password) {
		return res.json({ success: false, msg: "Please enter all fields." });
	}

	// Check for existing user
	User.findOne({ email })
		.then(user => {
			if (!user) {
				return res.json({
					success: false,
					msg: "User does not exist."
				});
			}

			// Validate Password
			bcrypt
				.compare(password, user.password)
				.then(isMatch => {
					if (!isMatch)
						return res.json({
							success: false,
							msg: "Invalid Password"
						});

					jwt.sign(
						{ id: user._id },
						config.get("jwtSecret"),
						{ expiresIn: 3600 },
						(err, token) => {
							if (err) throw err;
							res.json({
								success: true,
								token: "JWT " + token,
								user: {
									id: user._id,
									username: user.username,
									email: user.email
								}
							});
						}
					);
				})
				.catch(err => console.log(err + "bcrypt compare error"));
		})
		.catch(err => console.log(err));
});

// GET      /users      This url comes from server.js Use Routes so it's of no need to insert this url again in the router.get('')
// Get      Get user data
// @access  Private
router.get("/", (req, res) => {
	User.findById(req.user.id)
		.select("-password")
		.then(user => res.json({ username: user.username, email: user.email }));
});

// Get      /profile
// Get      Get User Profile
// Private
router.get(
	"/profile",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		res.json({ user: req.user });
	}
);

// POST /users/forgotpassword
// Forgot password function like getting token and sending email

router.post("/forgotpassword", (req, res, next) => {
	const { email } = req.body;

	if (email === "")
		return res.json({ success: false, msg: "Email required" });

	User.findOne({ email }).then(user => {
		if (!user) {
			return res.json({
				success: false,
				msg: "That email does not exist."
			});
		} else {
			const token = crypto.randomBytes(20).toString("hex");

			user.resetPasswordToken = token;
			user.resetPasswordExpires = Date.now() + 360000;
			user.save();

			nodeoutlook.sendEmail({
				auth: {
					user: "terrygreen1992@outlook.com",
					pass: "dnfldml godqhr123"
				},
				from: "terrygreen1992@outlook.com",
				to: `${user.email}`,
				subject: "Reset Password",
				text: `To reset password, click the link: http://localhost:4200/reset/${token}`,
				onError: err => {
					console.log("There was an error while sending email.", err);
					res.json({
						success: false,
						msg:
							"There caused an error while sending email. Perhaps your email address went wrong."
					});
				},
				onSuccess: response => {
					console.log("This is the response.", response);
					res.json({
						success: true,
						msg:
							"Recovery Email sent. This email is valid for only an hour. If you can not see the email in your inbox, take a look at Junk email box and click the link there to reset your password."
					});
				}
			});
		}
	});
});

// Get    '/users/reset'
// Reset Password after comparing tokens
router.get("/reset", (req, res, next) => {
	// console.log(req.query.id);
	User.findOne({
		resetPasswordToken: req.query.id,
		resetPasswordExpires: {
			$gt: Date.now()
		}
	}).then(user => {
		if (!user) {
			console.log("Password Reset Link is invalid or has expired.");
			res.json({
				success: false,
				msg: "Password Reset Link is invalid or has expired."
			});
		} else {
			res.send({
				success: true,
				email: user.email,
				msg: "The password reset link is OK."
			});
		}
	});
});

// Put          /users/updatepassword
// Update Password
router.put("/updatepassword", (req, res, next) => {
	User.findOne({ email: req.body.email }).then(user => {
		if (user) {
			bcrypt.genSalt(10, (err, salt) => {
				bcrypt.hash(req.body.password, salt, (err, hash) => {
					if (err) throw err;

					user.password = hash;
					user.resetPasswordToken = null;
					user.resetPasswordExpires = null;
					user.save().then(() => {
						console.log("Password Updated");
						res.json({
							success: true,
							msg: "Password is updated."
						});
					});
				});
			});
		} else {
			console.log("That email does not exist in db.");
			res.json({
				success: false,
				msg: "No user exists in our database to update."
			});
		}
	});
});

module.exports = router;
