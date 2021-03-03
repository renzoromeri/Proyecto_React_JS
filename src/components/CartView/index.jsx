import ItemCartDetail from "../ItemCartDetail";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartView = () => {
  const { cart, removeCartItem, cleanCart, cartTotal } = useContext(CartContext);

  const remove = (id) => {
    console.log(id);
    removeCartItem(id);
  };

  return (
    <>
      {cart.length !== 0 ? (
        <section className="cartwidget">
          <div>
            {cart.map((item) => {
              return (
                <ItemCartDetail key={item.id} product={item} remove={remove} />
              );
            })}
          </div>
          <div>
            <p>Cantidad de Productos elegidos: {cartTotal.totalItems}</p>
            <br />
            <p>Precio Total: {cartTotal.totalCash}</p>
            <br/>
            <Link to={`/cart`}>Pagar</Link>
            <br/>
            <a onClick={cleanCart}>Vaciar Carrito</a>
          </div>
        </section>
      ) : (
        <div>
          <p>No hay productos seleccionados"</p>
          <Link to={`/`}>Ir al Home</Link>
        </div>
      )}
    </>
  );
};

export default CartView;
