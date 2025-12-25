import app from "./app.js";
import { sequelize } from "./config/db.js";
import "./models/index.js";

import uploadRoutes from "./routes/upload.routes.js";
import productRoutes from "./routes/product.routes.js";

app.use("/api/upload", uploadRoutes);
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ MySQL connected successfully");

    await sequelize.sync();
    console.log("📦 Models synced with database");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Server failed to start:", error.message);
  }
};

startServer();
