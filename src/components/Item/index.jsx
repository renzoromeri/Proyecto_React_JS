import ItemDetailContainer from "../../containers/ItemDetailContainer";
import { ItemCount } from "../ItemCount";
import "./style.css";

const Item = ({ product }) => {
  
  const detalle = () => {
    return(
      <>
      <ItemDetailContainer id={product.id}/>
      </>
    );

  };

  
  return (
    <>
      <div className="card">
        <h3>{product.name}</h3>
        <br/>
        <button onClick={detalle}>Detalle</button>
        <p>Precio: ${product.price}</p>
        <br/>
        <ItemCount stock={12}/>
      </div>
      <br/>

    </>
  );
};

export default Item;
