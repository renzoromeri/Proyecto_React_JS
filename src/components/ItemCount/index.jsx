import "./style.css";
import { useState } from "react";

export const ItemCount = ({stock}) => {

    var stock2 = stock

    // contador - desafio clase 5
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
    if (contador > 1) {
      setContador(contador - 1);
    }
  };


    return (
        <>
        <div>
        <button onClick={onRest} >-</button>
        <b>{contador}</b>
        {(contador < stock2) ?
        <button onClick={ () => { onAdd(stock2) } }>+</button>
        : <p>No queda mas stock, lo lamento!!!</p>
        }
        </div>
        <div>
        <button>Comprar</button>
        </div>
        </>
    )
}