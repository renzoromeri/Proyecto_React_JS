import "./cartwidget.css";
import ItemCart from "../ItemCart";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

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
        <div className="cw">
          <div>
            {cart.map((item) => {
              return <ItemCart key={item.id} product={item} remove={remove} />;
            })}
          </div>
          <div>
            <p className="link-2">Cantidad Total: {cartTotal.totalItems}</p>
            <p className="link-2">Precio Total: {cartTotal.totalCash}</p>
          </div>
          <div className="bot-cartwidget">
            <Button onClick={cleanCart} variant="warning">
              Vaciar Carrito
            </Button>
          </div>
          <div className="bot-cartwidget">
            <Button variant="success">
              <Link className="link" to={`/cart`}>
                Finalizar Compra
              </Link>
            </Button>
          </div>
        </div>
      ) : (
        <div>
          <p>No hay productos seleccionados</p>
          <Button variant="warning">
            <Link className="link-2" to={`/`}>
              Ir al Home
            </Link>
          </Button>
        </div>
      )}
    </>
  );
};

export default CartWidget;
