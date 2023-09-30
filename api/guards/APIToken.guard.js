const jwt = require("jsonwebtoken");

const APITokenMiddleware = (req, res, next) => {
	try {
		const apiToken = req.headers["api-token"];
		jwt.verify(apiToken, process.env.JWT_SECRET);
		next();
	} catch (error) {
		if (error.name == "JsonWebTokenError") {
			error = {
				status: 541,
				message: error.message,
			};
		} else if (error.name == "TokenExpiredError") {
			error = {
				status: 542,
				message: error.message,
			};
		} else {
			error = {
				status: 500,
				message: error.message,
			};
		}

		next(error);
	}
};

module.exports = APITokenMiddleware;
