import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section>
      <h2>Page non trouvée</h2>
      <p>La page demandée n’existe pas.</p>
      <Link to="/">Retour à l’accueil</Link>
    </section>
  );
}