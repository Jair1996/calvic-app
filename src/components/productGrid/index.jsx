import { useGetProducts } from "../../hooks/useGetProducts";
import ProductGridItem from "../productGridItem";
import "./ProductGrid.css";

const ProductGrid = () => {
  const { data: products, loading } = useGetProducts("featureProduct");

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
