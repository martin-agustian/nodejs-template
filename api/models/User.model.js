const UserModel = (sequelize, Sequelize) => {
	const { DataTypes } = Sequelize;

	const User = sequelize.define("user", {
		id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
		username: { type: DataTypes.STRING, unique: true },
		role: { type: DataTypes.INTEGER, comment: "0 = SU, 1 = Esport, 2 = Gamer" },
	});

	return User;
};

module.exports = UserModel;
