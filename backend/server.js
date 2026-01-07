import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { sequelize } from "./models/index.js";
import artisanRoutes from "./routes/artisanRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";

dotenv.config();

const app = express();
console.log("🔥 CE SERVER.JS EST BIEN EXÉCUTÉ");

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/artisans", artisanRoutes);
app.use("/api/categories", categoryRoutes);

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// Middleware d’erreur
app.use(errorHandler);

// Sync BDD puis démarrage serveur
const port = process.env.PORT || 4000;

sequelize.sync({ alter: true })
  .then(() => {
    console.log("✅ Modèles synchronisés avec la base PostgreSQL");
    app.listen(port, () => {
      console.log(`🚀 Backend sur le port ${port}`);
    });
  })
  .catch((err) => {
    console.error("❌ Erreur de synchronisation Sequelize :", err);
  });