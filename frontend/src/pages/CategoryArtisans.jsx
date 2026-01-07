import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArtisansByCategory } from "../api/api.js";
import ArtisanCard from "../components/ArtisanCard.jsx";

function CategoryArtisans() {
  const { id } = useParams();
  const [artisans, setArtisans] = useState([]);

  useEffect(() => {
    fetchArtisansByCategory(id).then(setArtisans);
  }, [id]);

  return (
    <section>
      <h2>Artisans de la catégorie</h2>

      {artisans.map((artisan) => (
        <ArtisanCard key={artisan.id} artisan={artisan} />
      ))}
    </section>
  );
}

export default CategoryArtisans;