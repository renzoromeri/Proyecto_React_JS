import ItemDetail from "../ItemDetail";
import "./style.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Item = ({ product }) => {
  const [mostrar, setMostrar] = useState(false);

  const changeView = () => {
    setMostrar(!mostrar);
  };

  return (
    <>
      <div className="panel-item">
        <div className="c5-item">
          <img className="pequena-host" src={product.img} alt="carrito" />
        </div>
        <div className="c5-item">
          <Link className="link-2" to={`/producto/${product.id}`}>
            {product.name}
          </Link>
          <div className="c5-item">
            <p>Precio: ${product.price}</p>
          </div>
          <div className="c5-item">
            <Button className="dropdown" variant="info" onClick={changeView}>
              Detalle
            </Button>
            {mostrar ? (
              <div id="item" className="itemdetail">
                <ItemDetail product={product} />
                <Button
                  className="dropdown"
                  variant="danger"
                  onClick={changeView}
                >
                  x
                </Button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
