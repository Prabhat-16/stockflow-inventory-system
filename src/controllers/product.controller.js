const { Product, Inventory } = require("../models");

exports.createProduct = async (req, res) => {
  const { name, sku, price, warehouseId, initialQuantity } = req.body;

  if (!name || !sku || !price) {
    return res.status(400).json({ error: "Required fields missing" });
  }

  try {
    const existing = await Product.findOne({ where: { sku } });
    if (existing) {
      return res.status(409).json({ error: "SKU already exists" });
    }

    const product = await Product.create({ name, sku, price });

    if (warehouseId && initialQuantity >= 0) {
      await Inventory.create({
        ProductId: product.id,
        WarehouseId: warehouseId,
        quantity: initialQuantity
      });
    }

    res.status(201).json({
      message: "Product created",
      productId: product.id
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};