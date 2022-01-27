import { Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import Catalog from "./pages/catalog";
import Product from "./pages/product";
import AboutUs from "./pages/aboutUs";
import NotFound from "./pages/notFound";

import "./App.css";
import ProductGrid from "./components/productGrid";

function App() {
  return (
    <div className="App-container">
      <Header />

      <main className="container">
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="catalogo" element={<Catalog />} /> */}
            <Route path="catalogo" element={<Catalog />}>
              <Route index element={<p>Seleccione una sub categoría</p>} />
              <Route path=":category">
                <Route path=":subcategory" element={<ProductGrid />} />
              </Route>
            </Route>
            <Route path="producto">
              <Route path=":idProducto" element={<Product />} />
            </Route>
            <Route path="nosotros" element={<AboutUs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
