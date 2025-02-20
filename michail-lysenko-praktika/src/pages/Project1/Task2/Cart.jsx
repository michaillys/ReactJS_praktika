import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div className="p-3 mb-3 bg-light border rounded">
      <h2>Krepšelis</h2>
      {cart.length === 0 ? (
        <p>Krepšelis tuščias</p>
      ) : (
        <ul className="list-group">
          {cart.map((item) => (
            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <h5>{item.name}</h5>
                <p className="mb-1">Kaina: {item.price} €</p>
              </div>
              <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>
                Pašalinti iš krepšelio
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
  