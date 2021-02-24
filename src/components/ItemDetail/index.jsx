import "./style.css";
import vino from "./vino.png";
import { ItemCount } from "../ItemCount";
import { useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const ItemDetail = ({ product }) => {
  const [contador, setContador] = useState(1);
  const [boton, setBoton] = useState(1);

  const { cart, setCart, cartSize } = useContext(CartContext);

  const onAdd = () => {
    if (contador < product.stock) {
      setContador(contador + 1);
    } else {
      console.log("Perdon, no queda mas stock!!");
    }
    // setContador(contador + 1);
  };

  const onRest = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  const onBoton = () => {
    setBoton(setBoton + 1);
    inCarrito();
  };

  // funcion no terminada!!!
  const inCarrito = () => {
    
    // setCart([...cart, {item: product, quantity: contador}])
    if (cartSize === 0) {
      setCart([...cart, { item: product, quantity: contador }]);
    } else if (cart.includes(product)){
      for (let index = 0; index < cart.length; index++) {
        if (cart[index].item.id == product.id) {
          cart[index].quantity = cart[index].quantity + contador;
          break;
        }
      }
    } else {
      setCart([...cart, { item: product, quantity: contador }])
    }
  };


  return (
    <>
      <div className="card">
        <h4>Descripción:</h4>
        <br />
        <h4>{product.desc}</h4>
        <br />
        <img src={vino} className="carrito" alt="carrito" />
        <br />
        <ItemCount
          stock={product.stock}
          cont={contador}
          onAdd={onAdd}
          onRest={onRest}
          boton={boton}
          onBoton={onBoton}
          inCarrito={inCarrito}
        />
      </div>
    </>
  );
};

export default ItemDetail;
