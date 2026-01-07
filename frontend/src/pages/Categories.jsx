import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCategories } from "../api/api.js";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories().then(setCategories);
  }, []);

  return (
    <section>
      <h2>Catégories</h2>

      <ul>
        {categories.map((cat) => (
          <li key={cat.id}>
            <Link to={`/categories/${cat.id}/artisans`}>{cat.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Categories;