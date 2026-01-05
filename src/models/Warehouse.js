const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Warehouse = sequelize.define("Warehouse", {
  name: DataTypes.STRING
});

module.exports = Warehouse;