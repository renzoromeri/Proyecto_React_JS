// import ItemDetailContainer from "../../containers/ItemDetailContainer";
import { ItemCount } from "../ItemCount";
import ItemDetail from "../ItemDetail";
import "./style.css";

const Item = ({ product }) => {
  const detalle = () => {
    var element = document.getElementById("item");
    element.style.display = "flex";
  };

  const cerrar = () => {
    var element = document.getElementById("item");
    element.style.display = "none";
  };

  return (
    <>
      <div className="card">
        <h3>{product.name}</h3>
        <br />
        <div>
          <p>Precio: ${product.price}</p>
        </div>
        <br />
        <h4 onClick={detalle}>Detalle</h4>
        <div id="item" className="itemdetail" style={{ display: "none" }}>
          <ItemDetail product={product} />
          <br />
          <h4 onClick={cerrar}>x</h4>
        </div>
        <br />
        <ItemCount stock={product.stock} />
      </div>
      <br />
    </>
  );
};

export default Item;
