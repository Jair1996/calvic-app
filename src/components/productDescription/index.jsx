import "./ProductDescription.css";

const ProductDescription = ({ product }) => {
  return (
    <>
      <h2 className="ProductDescription-title ProductDescription-m-0">
        Acerca del producto
      </h2>
      <h3 className="ProductDescription-subtitle ProductDescription-m-0">
        Descripción
      </h3>
      <p className="ProductDescription-description ProductDescription-m-0">
        {product.description}
      </p>
      <h3 className="ProductDescription-subtitle ProductDescription-m-0">
        Especificaciones
      </h3>
      <div className="ProductDescription-specificationsContainer">
        <div>
          {product.specifications.map((e, index) => (
            <p
              key={index}
              className="ProductDescription-specification title ProductDescription-m-0"
            >
              {e.name}
            </p>
          ))}
        </div>
        <div>
          {product.specifications.map((e, index) => (
            <p
              key={index}
              className="ProductDescription-specification content ProductDescription-m-0"
            >
              {e.content}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductDescription;
