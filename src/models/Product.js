import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const Product = sequelize.define("Product", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  productType: {
    type: DataTypes.ENUM("manufactured", "trading"),
    allowNull: false,
  },

  description: {
    type: DataTypes.TEXT,
  },

  shortDescription: {
    type: DataTypes.STRING,
  },

  specifications: {
    type: DataTypes.JSON,
  },

  applications: {
    type: DataTypes.JSON,
  },

  images: {
    type: DataTypes.JSON, // array of { url, publicId }
    allowNull: false,
  },

  featured: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

export default Product;
