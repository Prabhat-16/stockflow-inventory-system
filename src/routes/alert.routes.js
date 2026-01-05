const router = require("express").Router();
const controller = require("../controllers/alert.controller");

router.get("/companies/:companyId/alerts/low-stock", controller.lowStockAlerts);

module.exports = router;