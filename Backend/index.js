require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db")
const { MONGO_URL, DBNAME, QUERY, PORT } = process.env;

/* database connection  */
connectDB(MONGO_URL, DBNAME, QUERY);
const app = express();

/* Cross-origin-resource-sharing */
app.use(cors());

app.get("/", (req, res) => {
	res.send({ message: "successfull" });
});

/* Listenin the Port */
app.listen(PORT, () => {
	console.log("sever is running");
});
