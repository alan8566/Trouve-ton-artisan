import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import Artisans from "./pages/Artisans.jsx";
import ArtisanDetails from "./pages/ArtisanDetails.jsx";
import Categories from "./pages/Categories.jsx";
import CategoryArtisans from "./pages/CategoryArtisans.jsx";

import LegalMentions from "./pages/LegalMentions.jsx";
import Privacy from "./pages/Privacy.jsx";
import Accessibility from "./pages/Accessibility.jsx";
import Cookies from "./pages/Cookies.jsx";

import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <>
      <Header />

      <main className="container py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artisans" element={<Artisans />} />
          <Route path="/artisans/:id" element={<ArtisanDetails />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:id/artisans" element={<CategoryArtisans />} />

          <Route path="/mentions-legales" element={<LegalMentions />} />
          <Route path="/donnees-personnelles" element={<Privacy />} />
          <Route path="/accessibilite" element={<Accessibility />} />
          <Route path="/cookies" element={<Cookies />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;