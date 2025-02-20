import { useState } from "react";
import ProductList from "./Task2/ProductList"
import Cart from "./Task2/Cart";




const Task2 = () => {
  const products = [
    { id: 1, name: "Item 1", price: 300 },
    { id: 2, name: "Item 2", price: 500 },
    { id: 3, name: "Item 3", price: 1000 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="container text-center">
      <h1>Pirkinių Krepšelis</h1>
      <div className="row">
        <div className="col-md-6">
          <ProductList products={products} addToCart={addToCart} />
        </div>
        <div className="col-md-6">
          <Cart cart={cart} removeFromCart={removeFromCart} />
        </div>
      </div>
    </div>
  );
};

export default Task2;

  