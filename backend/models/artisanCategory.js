import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const ArtisanCategory = sequelize.define("ArtisanCategory", {
  artisanId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  categoryId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
}, {
  tableName: "artisan_categories",
  timestamps: false,
});