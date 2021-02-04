import * as React from "react";
import { useState } from "react";
import { ItemCount } from "../components/itemCount";
import ItemList from "../components/ItemList";
import productList from "../mocks/productsList";

const ItemListContainer = ({ text }) => {
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

  // desafio clase 6

  const [products, setProducts] = useState([]);

  React.useEffect(() => {
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(productList), 2000);
    });

    myPromise.then(
      (result) => setProducts(result)
      // ()=>{}
    );
  }, []);

  return (
    <>
      <div>
        <a href="/#" className="h1">
          {" "}
          {text}
        </a>
      </div>

      <br />
      
      <div>
        <ItemList products={products}/>
      </div>
      
      <br />

      <div>
        <ItemCount
          stock={12}
          contador={contador}
          onAdd={onAdd}
          onRest={onRest}
        ></ItemCount>
      </div>
    </>
  );
};

export default ItemListContainer;
