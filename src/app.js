const express = require("express");
const app = express();

app.use(express.json());

app.use("/api", require("./routes/product.routes"));
app.use("/api", require("./routes/alert.routes"));

module.exports = app;