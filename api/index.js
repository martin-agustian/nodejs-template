const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");

// env
require("dotenv").config();

app.use(morgan("dev"));
// for parsing application/json
app.use(bodyParser.json());
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// sql connection
require("./configs/Model.config");

// cors
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "*");
	res.header("Access-Control-Allow-Methods", "*");

	next();
});

// routing
app.use("/", require("./configs/Route.config"));

module.exports = app;
