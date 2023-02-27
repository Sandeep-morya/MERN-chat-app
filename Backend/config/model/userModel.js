/*
	- name
	- email
	- password
	- pic(url of profile picture)
 */
const { Schema, model } = require("mongoose");

const userSchema = Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true },
		password: { type: String, required: true },
		pic: {type: String},
	},
	{
		timestamps: true,
	},
);

const User = model("user", userSchema);

module.exports = User;
