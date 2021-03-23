import {Button} from "react-bootstrap";

export const ItemCount = ({ stock, cont, onAdd, onRest, inCarrito}) => {
  return (
    <>
      <div className="dropdown">
        <Button variant="secondary" onClick={onRest}>-</Button>
        <b className="cont">{cont}</b>
        {cont < stock ? (<Button variant="secondary" onClick={() => {onAdd(stock);}}> +</Button>) : (<p>No queda mas stock, lo lamento!!!</p>)}
      </div>
      <div className="dropdown"> 
        <Button variant="success" onClick={inCarrito} >Agregar al Carrito</Button>
      </div>
    </>
  );
};