import "./ProductInfo.css";

const ProductInfo = ({ product }) => {
  console.log(product);

  let priceDiscount = 0;

  if (product.discount !== 0) {
    const desc = (product.discount / 100) * product.price;

    priceDiscount = Number.parseFloat(product.price - desc).toFixed(2);
  }

  return (
    <>
      <p className="ProductInfo-brand m-0">{product.brand}</p>
      <p className="ProductInfo-model m-0">{product.model}</p>
      <p className="ProductInfo-sku m-0">SKU: {product.sku}</p>
      <div className="ProductInfo-priceContainer">
        {product.discount !== 0 ? (
          <>
            <p className="ProductInfo-priceBefore m-0">
              S/. {Number.parseFloat(product.price).toFixed(2)}
            </p>
            <div className="ProductInfo-priceDiscountContainer">
              <p className="ProductInfo-priceFinal m-0">S/. {priceDiscount}</p>
              <p className="ProductInfo-discount m-0">-{product.discount}%</p>
            </div>
          </>
        ) : (
          <p className="ProductInfo-priceFinal m-0">
            S/. {Number.parseFloat(product.price).toFixed(2)}
          </p>
        )}
      </div>
      <div className="ProductInfo-sizeContainer">
        <div>
          <p className="ProductInfo-sizeContainerTitle m-0">Tallas</p>
          <div>
            {product.sizes.map((e, index) => (
              <p
                key={index}
                className={`ProductInfo-sizeContainerContent m-0 ${
                  e.amount === 0 && "zero"
                }`}
              >
                {e.size}
              </p>
            ))}
          </div>
        </div>
        <div>
          <p className="ProductInfo-sizeContainerTitle m-0">
            Unidades disponibles
          </p>
          <div>
            {product.sizes.map((e, index) => (
              <p
                key={index}
                className={`ProductInfo-sizeContainerContent amount m-0 ${
                  e.amount === 0 && "zeroAmount"
                }`}
              >
                {e.amount}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
