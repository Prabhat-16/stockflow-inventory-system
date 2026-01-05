const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Inventory = sequelize.define("Inventory", {
  quantity: { type: DataTypes.INTEGER, allowNull: false }
});

module.exports = Inventory;