const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Sale = sequelize.define("Sale", {
  quantity: DataTypes.INTEGER,
  soldAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
});

module.exports = Sale;