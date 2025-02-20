import ProductItem from "./ProductItem";

const ProductList = ({ products, addToCart }) => {
  return (
    <div>
      <h2>Prekės</h2>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
