import express from "express";
import { Category, Artisan } from "../models/index.js";

const router = express.Router();

/* ---------------------------------------------
   📌 GET toutes les catégories
--------------------------------------------- */
router.get("/", async (req, res, next) => {
  try {
    const categories = await Category.findAll({
      order: [["name", "ASC"]],
    });

    res.json(categories);
  } catch (err) {
    next(err);
  }
});

/* ---------------------------------------------
   ➕ POST créer une catégorie
--------------------------------------------- */
router.post("/", async (req, res, next) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({
        error: true,
        message: "Le nom de la catégorie est requis",
      });
    }

    const category = await Category.create({ name });

    res.status(201).json(category);
  } catch (err) {
    next(err);
  }
});

/* ---------------------------------------------
   📌 GET artisans d’une catégorie
--------------------------------------------- */
router.get("/:id/artisans", async (req, res, next) => {
  try {
    const category = await Category.findByPk(req.params.id, {
      include: {
        model: Artisan,
        through: { attributes: [] },
      },
    });

    if (!category) {
      return res.status(404).json({
        error: true,
        message: "Catégorie non trouvée",
      });
    }

    res.json(category.Artisans || []);
  } catch (err) {
    next(err);
  }
});

export default router;