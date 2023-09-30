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

// models
require("./models/Base.model");

// cors
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "*");
	res.header("Access-Control-Allow-Methods", "*");

	next();
});

// routes
app.use("/", require("./routes/Base.route"));

module.exports = app;
