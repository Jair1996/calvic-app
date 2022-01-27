import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDescription from "../../components/productDescription";
import ProductImages from "../../components/productImages";
import ProductInfo from "../../components/productInfo";
import { useGetProducts } from "../../hooks/useGetProducts";

import "./Product.css";

const Product = () => {
  let { idProducto } = useParams();

  const { data: product, loading } = useGetProducts({
    type: "producto",
    payload: { id: idProducto },
  });

  const [urlImage, setUrlImage] = useState("");

  useEffect(() => {
    if (!loading) {
      setUrlImage(product[0].product.images.main);
    }
  }, [product, loading]);

  const handleChangeImage = (url) => {
    setUrlImage(url);
  };

  return (
    <>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div className="Product">
          <section className="Product-images">
            <ProductImages
              product={product[0].product}
              handleChangeImage={handleChangeImage}
              urlImage={urlImage}
            />
          </section>
          <section className="Product-info">
            <ProductInfo product={product[0].product} />
          </section>
          <section className="Product-description">
            <ProductDescription product={product[0].product} />
          </section>
        </div>
      )}
    </>
  );
};

export default Product;
