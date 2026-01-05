const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Supplier = sequelize.define("Supplier", {
  name: DataTypes.STRING,
  contactEmail: DataTypes.STRING
});

module.exports = Supplier;