const db = require("../configs/Model.config");
const User = db.User;

exports.list = async (req, res, next) => {
	const users = await User.findAll();

	res.status(200).json({
		message: "success fetch data",
		result: users,
	});
};

exports.delete = (req, res, next) => {
	
};
