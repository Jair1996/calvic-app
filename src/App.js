import { Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import Catalog from "./pages/catalog";
import Product from "./pages/product";
import AboutUs from "./pages/aboutUs";
import NotFound from "./pages/notFound";

import "./App.css";

function App() {
  return (
    <div className="App-container">
      <Header />

      <main className="container">
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<Catalog />} />
            <Route path="/producto" element={<Product />} />
            <Route path="/nosotros" element={<AboutUs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
