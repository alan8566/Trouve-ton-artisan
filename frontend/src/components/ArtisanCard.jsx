import { Link } from "react-router-dom";
import StarRating from "./StarRating.jsx";

function ArtisanCard({ artisan }) {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">
          {artisan.companyName || `${artisan.firstName} ${artisan.lastName}`}
        </h5>

        <StarRating rating={artisan.averageRating || 0} />

        <p className="card-text">{artisan.specialty}</p>
        <p className="card-text text-muted">{artisan.city}</p>

        <Link to={`/artisans/${artisan.id}`} className="btn btn-primary">
          Voir la fiche
        </Link>
      </div>
    </div>
  );
}

export default ArtisanCard;