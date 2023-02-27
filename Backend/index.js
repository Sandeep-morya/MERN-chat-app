require("dotenv").config();
const express = require("express");
const cors = require("cors");

const userRouter = require("./routes/user.route");

const connectDB = require("./config/db");
const { MONGO_URL, DBNAME, QUERY, PORT } = process.env;

/* database connection  */
connectDB(MONGO_URL, DBNAME, QUERY);
const app = express();

/* Cross-origin-resource-sharing */
app.use(cors());
app.use(express.json())
app.use("/api", userRouter);

app.get("/", (req, res) => {
	res.send({ message: "server is Live" });
});

/* Listenin the Port */
app.listen(PORT, () => {
	console.log("sever is running");
});
