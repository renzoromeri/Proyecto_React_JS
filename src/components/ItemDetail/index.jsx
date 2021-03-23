import "./style.css";
import { ItemCount } from "../ItemCount";
import { useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const ItemDetail = ({ product }) => {
  const [contador, setContador] = useState(1);

  const { updateCart } = useContext(CartContext);

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

  const inCart = () => {
    updateCart(
      product.id,
      product.name,
      product.price,
      product.stock,
      product.idCat,
      product.desc,
      product.img,
      contador
    );
    alert("Producto Agregado al Carrito");
  };

  return (
    <>
      <div className="card-detail">
        <p>{product.desc}</p>
        <br />
        <ItemCount
          stock={product.stock}
          cont={contador}
          onAdd={onAdd}
          onRest={onRest}
          inCarrito={inCart}
        />
      </div>
    </>
  );
};

export default ItemDetail;
