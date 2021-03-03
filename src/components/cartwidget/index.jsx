// import carrito from "./carrito.png";
import "./cartwidget.css";
import ItemCart from "../ItemCart";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cart, removeCartItem, cleanCart, cartTotal } = useContext(
    CartContext
  );

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
              return <ItemCart key={item.id} product={item} remove={remove} />;
            })}
          </div>
          <div>
            <p>Cantidad de Productos elegidos: {cartTotal.totalItems}</p>
            <p>Precio Total: {cartTotal.totalCash}</p>
          </div>
          <div>
            <a onClick={cleanCart}>Vaciar Carrito</a>
          </div>
          <div>
            <Link to={`/cart`}>Finalizar Compra</Link>
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

export default CartWidget;

{
  /* <div>
          <img src={carrito} className="carrito" alt="carrito" />
        </div> */
}
