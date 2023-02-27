const { connect,set } = require("mongoose");


async function connectDB(url, dbname, query) {
    set("strictQuery",true)
	try {
		const { connection } = await connect(url + dbname + query);
		console.log("connected with database:", connection.host);
	} catch (error) {
		console.log(error);
	}
}

module.exports = connectDB;
