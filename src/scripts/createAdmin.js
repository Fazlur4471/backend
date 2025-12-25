import { sequelize } from "../config/db.js";
import { User } from "../models/index.js";
import { hashPassword } from "../utils/hash.js";

const createAdmin = async () => {
  try {
    await sequelize.authenticate();

    const existingAdmin = await User.findOne({
      where: { email: "admin@maharaja.com" },
    });

    if (existingAdmin) {
      console.log("⚠️ Admin already exists");
      process.exit();
    }

    const password = await hashPassword("admin123");

    await User.create({
      email: "admin@maharaja.com",
      password,
      role: "admin",
    });

    console.log("✅ Admin created successfully");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

createAdmin();
