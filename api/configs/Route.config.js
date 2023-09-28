const express = require("express");
const app = express();

// routes
const AuthRoutes = require("../routes/Auth.route");
const UserRoutes = require("../routes/User.route");
const UploadRoutes = require("../routes/Upload.route");

// middleware
const APIKeyMiddleware = require("../middlewares/APIKey.middleware");

app.use("*", APIKeyMiddleware);
app.use("/auth", AuthRoutes);
app.use("/user", UserRoutes);
app.use("/upload", UploadRoutes);

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