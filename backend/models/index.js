import { sequelize } from "../config/database.js";
import { Artisan } from "./artisan.js";
import { Category } from "./category.js";
import { ArtisanCategory } from "./artisanCategory.js";

// Relation Many-to-Many : un artisan peut avoir plusieurs catégories
// et une catégorie peut contenir plusieurs artisans
Artisan.belongsToMany(Category, {
  through: ArtisanCategory,
  foreignKey: "artisanId",
  otherKey: "categoryId",
});

Category.belongsToMany(Artisan, {
  through: ArtisanCategory,
  foreignKey: "categoryId",
  otherKey: "artisanId",
});

export { sequelize, Artisan, Category, ArtisanCategory };