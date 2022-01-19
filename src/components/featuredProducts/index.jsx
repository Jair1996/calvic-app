import ProductGrid from "../productGrid";

import "./FeaturedProducts.css";

const index = () => {
  return (
    <section className="FeaturedProducts">
      <div className="FeaturedProducts-details">
        <h2 className="FeaturedProducts-title">Productos destacados</h2>
        <p className="FeaturedProducts-description">
          Los mejores productos al mejor precio
        </p>
      </div>
      <ProductGrid />
    </section>
  );
};

export default index;
