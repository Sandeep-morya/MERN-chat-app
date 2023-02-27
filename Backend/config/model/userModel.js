/*
	- name
	- email
	- password
	- image(url of profile picture)
 */
const { Schema, model } = require("mongoose");

const userSchema = Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true ,unique:true},
		password: { type: String, required: true },
		image: { type: String,required:true},
	},
	{
		timestamps: true,
	},
);

const User = model("user", userSchema);

module.exports = User;
