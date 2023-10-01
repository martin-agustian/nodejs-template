const express = require("express");
const app = express();

// routes
const UserRoutes = require("../routes/User.route");
const EmailRoutes = require("../routes/Email.route");

// middlewares
const APIKeyGuard = require("../guards/APIKey.guard");

app.use("*", APIKeyGuard);
app.use("/user", UserRoutes);
app.use("/email", EmailRoutes);

// route not found
app.use((req, res, next) => {
	if (req.path == "/") {
		res.status(200).json({
			message: "Node JS API",
			result: null,
		});
	}
	else {
		res.status(404).json({
			message: "Not Found",
			result: null,
		});
	}
});

// route error handler
app.use((error, req, res, next) => {
	res.status(error.status || 500).json({
		message: error.message,
		result: null
	});
});

module.exports = app;