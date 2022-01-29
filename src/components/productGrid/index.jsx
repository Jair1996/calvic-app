import { useParams } from "react-router-dom";
import { useGetProducts } from "../../hooks/useGetProducts";
import Loader from "../loader";
import ProductGridItem from "../productGridItem";
import "./ProductGrid.css";

const ProductGrid = () => {
  let params = useParams();

  const { data: products, loading } = useGetProducts({
    type: !!params.category ? "product" : "featureProduct",
    payload: {
      category: !!params.category ? params.category : "",
      subcategory: !!params.subcategory ? params.subcategory : "",
    },
  });

  console.log(products);

  return (
    <>
      {!!loading ? (
        <Loader />
      ) : products.length === 0 ? (
        <p className="Product-notFound">
          Lo sentimos, no existen productos para "{params.category}/
          {params.subcategory}"
        </p>
      ) : (
        <div className="ProductGrid">
          {products.map((product) => (
            <ProductGridItem key={product.id} data={product} />
          ))}
        </div>
      )}
    </>
  );
};

export default ProductGrid;
