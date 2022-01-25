import { useParams } from "react-router-dom";
import { useGetProducts } from "../../hooks/useGetProducts";
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

  return (
    <>
      {!!loading ? (
        <p>Cargando...</p>
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
