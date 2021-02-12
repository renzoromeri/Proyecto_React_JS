import "./style.css";
import vino from "./vino.png";

const ItemDetail = ({ product }) => {

  return (
    <>
      <div className="card">
        <h4>Descripción:</h4>
        <br/>
        <h4>{product.desc}</h4>
        <br/>
        <img src={vino} className="carrito" alt="carrito" />
      </div>
    </>
  );
};

export default ItemDetail;
