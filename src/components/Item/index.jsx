// import ItemDetailContainer from "../../containers/ItemDetailContainer";
import { ItemCount } from "../ItemCount";
import ItemDetail from "../ItemDetail";
import "./style.css";
import { useState } from "react";

const Item = ({ product }) => {
  const [mostrar, setMostrar] = useState(false);

  const changeView = () => {
    setMostrar(!mostrar);
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
        <h4 onClick={changeView}>Detalle</h4>
        {mostrar ? (
          <div id="item" className="itemdetail">
            <ItemDetail product={product} />
            <br />
            <h4 onClick={changeView}>x</h4>
          </div>
        ) : null}
        <br />
        <ItemCount stock={product.stock} />
      </div>
      <br />
    </>
  );
};

export default Item;

// const detalle = (product) => {
//   var element = document.getElementById(product.id);
//   element.style.display = "flex";
// };

// const cerrar = () => {
//   var element = document.getElementById(product.id);
//   element.style.display = "none";
// };

// return (
//   <>
//     <div className="card">
//       <h3>{product.name}</h3>
//       <br />
//       <div>
//         <p>Precio: ${product.price}</p>
//       </div>
//       <br />
//       <h4 onClick={() => detalle(product)}>Detalle</h4>
//       <div id={product.id} className="itemdetail" style={{ display: "none" }}>
//         <ItemDetail product={product} />
//         <br />
//         <h4 onClick={cerrar}>x</h4>
//       </div>
//       <br />
//       <ItemCount stock={product.stock} />
//     </div>
//     <br />
//   </>
// );
