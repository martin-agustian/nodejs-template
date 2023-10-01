const UserModel = (sequelize, Sequelize) => {
	const { DataTypes } = Sequelize;

	const User = sequelize.define("user", {
		id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
		name: { type: DataTypes.STRING },
		email: { type: DataTypes.STRING, unique: true },
		phone: { type: DataTypes.STRING },
	}, {
		freezeTableName: true
	});

	return User;
};

module.exports = UserModel;
