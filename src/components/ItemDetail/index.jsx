import "./style.css";
import vino from "./vino.png";
import { ItemCount } from "../ItemCount";
import { useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const ItemDetail = ({ product }) => {
  const [contador, setContador] = useState(1);
  const [boton, setBoton] = useState(1);

  const { cart, updateCart, cartTotal } = useContext(CartContext);

  const onAdd = () => {
    if (contador < product.stock) {
      setContador(contador + 1);
    } else {
      console.log("Perdon, no tenemos stock por el momento! =(");
    }
  };

  const onRest = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  const onBoton = () => {
    setBoton(setBoton + 1);
  };

  const inCart = () => {
    updateCart(
      product.id,
      product.name,
      product.price,
      product.stock,
      product.idCat,
      product.desc,
      contador
    );
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
          inCarrito={inCart}
        />
      </div>
    </>
  );
};

export default ItemDetail;
