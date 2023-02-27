/*
    - sender
    - content
    - chat
*/

const { Schema, model } = require("mongoose");

const messageSchema = Schema(
	{
		sender: { type: Schema.Types.ObjectId, ref: "User" },
		content: { type: String, trim: true },
		chat: { type: Schema.Types.ObjectId, ref: "Chat" },
	},
	{
		timestamps: true,
	},
);

const Message = model("message", messageSchema);

module.exports =  Message ;
