import "./ProductImages.css";

const ProductImages = ({ product, urlImage, handleChangeImage }) => {
  return (
    <div className="ProductImages">
      <div className="Product-smallImageContainer">
        {Object.keys(product.images).map((e, index) => (
          <img
            onClick={() => handleChangeImage(product.images[e])}
            className="Product-smallImage"
            key={index}
            src={product.images[e]}
            alt={e}
          />
        ))}
      </div>
      <img className="Product-bigImage" src={urlImage} alt="imagen producto" />
    </div>
  );
};

export default ProductImages;
