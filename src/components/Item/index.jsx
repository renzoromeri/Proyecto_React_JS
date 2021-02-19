import ItemDetail from "../ItemDetail";
import "./style.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  const [mostrar, setMostrar] = useState(false);

  const changeView = () => {
    setMostrar(!mostrar);
  };

  return (
    <>
      <div className="card">
        <Link to={`/producto/${product.id}`}>{product.name}</Link>
        <br />
        <div>
          <p>Precio: ${product.price}</p>
        </div>
        <br />
        <h4 onClick={changeView}>Detalle del producto</h4>
        {mostrar ? (
          <div id="item" className="itemdetail">
            <ItemDetail product={product} />
            <br />
            <h4 onClick={changeView}>x</h4>
          </div>
        ) : null}
        <br />
      </div>
      <br />
    </>
  );
};

export default Item;
