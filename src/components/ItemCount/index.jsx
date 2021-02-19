import "./style.css";
import { Link } from "react-router-dom";

export const ItemCount = ({ stock, cont, onAdd, onRest, boton, onBoton }) => {
  return (
    <>
      <div>
        <button onClick={onRest}>-</button>
        <b>{cont}</b>
        {cont < stock ? (
          <button
            onClick={() => {
              onAdd(stock);
            }}
          >
            +
          </button>
        ) : (
          <p>No queda mas stock, lo lamento!!!</p>
        )}
      </div>
      <div>
        {boton === 1 ? (
          <button onClick={onBoton}>Agregar al Carrito</button>
        ) : (
          <Link to={`/cart/`}>Terminar mi compra</Link>
        )}
      </div>
    </>
  );
};
