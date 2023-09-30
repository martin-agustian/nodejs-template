const db = require("../configs/Sequelize.config");

exports.upload = async (req, res, next) => {
	res.status(200).json({
		message: "success upload data",
		result: null,
	});
};
