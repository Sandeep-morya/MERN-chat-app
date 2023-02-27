/*
    - chatName
    - isGroupChat
    - users
    - latestMessage
    - groupAdmin
*/

const { Schema, model } = require("mongoose");

const chatSchema = Schema(
	{
		chatName: { type: String, trim: true },
		isGroupChat: { type: Boolean, default: false },
		users: [
			{
				type: Schema.Types.ObjectId,
				ref: "User",
			},
		],
		latestMessage: { type: Schema.Types.ObjectId, ref: "Message" },
		groupAdmin: {
			type: Schema.Types.ObjectId,
			ref: "User",
		},
	},
	{
		timestamps: true,
	},
);

const Chat = model("chat", chatSchema);

module.exports =  Chat ;
