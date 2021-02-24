import carrito from "./carrito.png";
import "./cartwidget.css";

const CartWidget = ({ cart, size}) => {
  console.log(cart);
  console.log(size);

  return (
    <>
      <section className="cartwidget">
        <div>
          <img src={carrito} className="carrito" alt="carrito" />
        </div>
        <div>
          {/* <p>{item.item}</p>
          <p>{item.quantity}</p> */}
          <p>{size}</p>
        </div>
      </section>
    </>
  );
};

export default CartWidget;
