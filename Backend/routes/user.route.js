const { Router } = require("express");
const User = require("../config/model/userModel");

const userRouter = Router();

/* Register Route  setup*/
userRouter.post("/register", async (req, res) => {
	try {
		const user = new User(req.body);
		const data = await user.save();
		res.status(201).send({ data });
	} catch (error) {
		res.status(403).send({ error });
	}
});

/* Login Route setup */
userRouter.post("/login", async (req, res) => {
	try {
		const data = await User.findOne(req.body);
		if (!data) {
			throw new Error("User not Exists");
		}
		res.status(201).send({ data });
	} catch (error) {
		res.status(403).send({ error });
	}
});

module.exports = userRouter;
