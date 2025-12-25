import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const Enquiry = sequelize.define(
  "Enquiry",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },

    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    status: {
      type: DataTypes.ENUM("new", "in_progress", "resolved"),
      defaultValue: "new",
    },
  },
  {
    tableName: "enquiries",
    timestamps: true,
  }
);

export default Enquiry;
