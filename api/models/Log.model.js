const LogModel = (sequelize, Sequelize) => {
	const { DataTypes } = Sequelize;

	const Log = sequelize.define("log", {
		id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
		level: { type: DataTypes.STRING },
		message: { type: DataTypes.STRING },
		meta: { type: DataTypes.STRING },
    timestamp: { type: DataTypes.DATE }
	}, { freezeTableName: true, timestamp: false });

	return Log;
};

module.exports = LogModel;
