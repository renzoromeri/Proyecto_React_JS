import carrito from "./carrito.png";
import "./cartwidget.css";

const CartWidget = ({ text }) => {
  return (
    <>
      <section className="cartwidget">
        <div>
          <img src={carrito} className="carrito" alt="carrito" />
        </div>
        <div>
          <p>{text}</p>
        </div>
      </section>
    </>
  );
};

export default CartWidget;
