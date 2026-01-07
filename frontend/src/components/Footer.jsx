import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 pt-4 pb-4">
      <div className="container">

        <div className="row">

          {/* MENU LÉGAL */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Pages légales</h5>
            <ul className="list-unstyled">
              <li><Link to="/mentions-legales" className="text-white text-decoration-none">Mentions légales</Link></li>
              <li><Link to="/donnees-personnelles" className="text-white text-decoration-none">Données personnelles</Link></li>
              <li><Link to="/accessibilite" className="text-white text-decoration-none">Accessibilité</Link></li>
              <li><Link to="/cookies" className="text-white text-decoration-none">Cookies</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="col-md-8">
            <h5 className="fw-bold">Contact</h5>
            <p className="mb-0">
              101 cours Charlemagne<br />
              CS 20033<br />
              69269 LYON CEDEX 02<br />
              France<br />
              +33 (0)4 26 73 40 00
            </p>
          </div>

        </div>

        <hr className="border-secondary mt-4" />

        <p className="text-center text-secondary mb-0">
          © {new Date().getFullYear()} Région Auvergne-Rhône-Alpes — Trouve ton artisan
        </p>

      </div>
    </footer>
  );
}

export default Footer;