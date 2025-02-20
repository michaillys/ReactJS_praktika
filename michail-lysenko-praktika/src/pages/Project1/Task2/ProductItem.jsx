const ProductItem = ({ product, addToCart }) => {
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <h5 className="mb-1">{product.name}</h5>
        <p className="mb-1">Kaina: {product.price} €</p>
      </div>
      <button className="btn btn-primary" onClick={() => addToCart(product)}>Pridėti į krepšelį</button>
      </li>
    );
  };
  
  export default ProductItem;
  