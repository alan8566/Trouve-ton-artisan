import XLSX from "xlsx";
import { sequelize, Artisan, Category } from "./models/index.js";
import dotenv from "dotenv";

dotenv.config();

async function seed() {
  try {
    console.log("📥 Lecture du fichier Excel...");

    const workbook = XLSX.readFile("data.xlsx");
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const rows = XLSX.utils.sheet_to_json(sheet);

    console.log(`📄 ${rows.length} lignes trouvées`);

    for (const row of rows) {
      const {
        Nom,
        Spécialité,
        Note,
        Ville,
        "A propos": APropos,
        Email,
        "Site Web": SiteWeb,
        Catégorie,
      } = row;

      // 1. Créer ou récupérer la catégorie
      const [category] = await Category.findOrCreate({
        where: { name: Catégorie },
      });

      // 2. Créer l’artisan
      const artisan = await Artisan.create({
        firstName: Nom,
        lastName: "",
        companyName: Nom,
        email: Email,
        city: Ville,
        description: APropos,
        imageUrl: SiteWeb || null,
        rating: Note,
        speciality: Spécialité,
      });

      // 3. Associer artisan ↔ catégorie
      await artisan.addCategory(category);

      console.log(`✔️ Ajouté : ${Nom}`);
    }

    console.log("🎉 Import terminé !");
    process.exit();
  } catch (err) {
    console.error("❌ Erreur lors du seed :", err);
    process.exit(1);
  }
}

seed();