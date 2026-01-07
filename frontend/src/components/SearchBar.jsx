import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/artisans?q=${query}`);
  };

  return (
    <form className="d-flex" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control me-2"
        placeholder="Rechercher un artisan..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="btn btn-light" type="submit">
        🔍
      </button>
    </form>
  );
}

export default SearchBar;