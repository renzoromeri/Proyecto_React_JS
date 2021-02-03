import { useState } from "react";
import { ItemCount } from "../components/ItemCount";

const ItemListContainer = ({ text }) => {
  const [contador, setContador] = useState(1);

  const onAdd = () => {
    // if (contador < stock) {
    //   setContador(contador + 1);
    // }else{
    //     console.log("Perdon, no queda mas stock!!");
    // }
    setContador(contador + 1);
  };

  const onRest = () => {
      if(contador > 1){
        setContador(contador - 1);
      }
  };



  return (
    <>
      <div>
        <a href="/#" className="h1">
          {" "}
          {text}
        </a>
      </div>
      <br/>
      <div>
        <ItemCount stock={12} contador={contador} onAdd={onAdd} onRest={onRest}></ItemCount>
      </div>
    </>
  );
};

export default ItemListContainer;
