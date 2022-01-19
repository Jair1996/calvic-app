import "./ProductGridItem.css";

const ProductGridItem = ({ data }) => {
  const { product } = data;

  let priceDiscount = 0;

  if (product.discount !== 0) {
    const desc = (product.discount / 100) * product.price;

    priceDiscount = Number.parseFloat(product.price - desc).toFixed(2);
  }

  return (
    <div className="ProductGridItem">
      {product.discount !== 0 && (
        <div className="ProductGridItem-discount">-{product.discount}%</div>
      )}
      <figure>
        <img
          className="ProductGridItem-image"
          src={product.images.main}
          alt="ad"
        />
      </figure>
      <div className="ProductGridItem-details">
        <p className="ProductGridItem-brand">{product.brand}</p>
        <p className="ProductGridItem-model">{product.model}</p>
        <div className="ProductGridItem-priceContainer">
          {product.discount !== 0 ? (
            <>
              <p className="ProductGridItem-discountBefore">
                S/. {Number.parseFloat(product.price).toFixed(2)}
              </p>
              <p className="ProductGridItem-discountAfter">
                S/. {priceDiscount}
              </p>
            </>
          ) : (
            <p className="ProductGridItem-price">
              S/. {Number.parseFloat(product.price).toFixed(2)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductGridItem;
