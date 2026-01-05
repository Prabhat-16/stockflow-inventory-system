const sequelize = require("../config/database");
const Product = require("./Product");
const Inventory = require("./Inventory");
const Warehouse = require("./Warehouse");
const Supplier = require("./Supplier");
const Sale = require("./Sale");

// Relationships
Product.belongsToMany(Warehouse, { through: Inventory });
Warehouse.belongsToMany(Product, { through: Inventory });

Product.belongsToMany(Supplier, { through: "ProductSupplier" });
Supplier.belongsToMany(Product, { through: "ProductSupplier" });

Sale.belongsTo(Product);
Sale.belongsTo(Warehouse);

module.exports = {
  sequelize,
  Product,
  Inventory,
  Warehouse,
  Supplier,
  Sale
};