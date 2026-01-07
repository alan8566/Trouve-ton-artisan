import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCategories } from "../api/api.js";
import SearchBar from "./SearchBar.jsx";

function Header() {
  const [categories, setCategories] = useState([]);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
  fetchCategories().then((data) => {
    // Réorganiser manuellement dans l’ordre demandé
    const ordered = ["Bâtiment", "Services", "Fabrication", "Alimentation"];
    const sorted = ordered.map((name) => data.find((cat) => cat.name === name)).filter(Boolean);
    setCategories(sorted);
  
}, []);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark bg-primary shadow-sm header-scroll ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="container">

        {/* LOGO */}
        <Link className="navbar-brand fw-bold fs-4" to="/">
          Trouve ton artisan
        </Link>

        {/* BURGER MENU */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* NAVIGATION */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto me-3">

            {categories.map((cat, index) => (
              <li className="nav-item" key={cat.id}>
                <NavLink
                  to={`/categories/${cat.id}/artisans`}
                  className="nav-link nav-animated delay-${index + 1}"
                >
                  {cat.name}
                </NavLink>
              </li>
            ))}

          </ul>

          {/* BARRE DE RECHERCHE */}
          <SearchBar />
        </div>
      </div>
    </nav>
  );
}

export default Header;