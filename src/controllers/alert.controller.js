const { Inventory, Product, Warehouse, Supplier, Sale } = require("../models");
const { Op } = require("sequelize");

exports.lowStockAlerts = async (req, res) => {
  const { companyId } = req.params;
  const alerts = [];

  const inventories = await Inventory.findAll({
    include: [
      { model: Product, include: Supplier },
      { model: Warehouse }
    ]
  });

  for (const inv of inventories) {
    const sales = await Sale.sum("quantity", {
      where: {
        ProductId: inv.Product.id,
        WarehouseId: inv.Warehouse.id,
        soldAt: { [Op.gte]: new Date(Date.now() - 30 * 86400000) }
      }
    });

    if (!sales) continue;

    const avgDaily = sales / 30;

    if (inv.quantity < inv.Product.lowStockThreshold) {
      alerts.push({
        product_id: inv.Product.id,
        product_name: inv.Product.name,
        sku: inv.Product.sku,
        warehouse_id: inv.Warehouse.id,
        warehouse_name: inv.Warehouse.name,
        current_stock: inv.quantity,
        threshold: inv.Product.lowStockThreshold,
        days_until_stockout: Math.floor(inv.quantity / avgDaily),
        supplier: inv.Product.Suppliers[0]
      });
    }
  }

  res.json({ alerts, total_alerts: alerts.length });
};