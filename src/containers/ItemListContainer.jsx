import * as React from "react";
import { useState } from "react";
import ItemList from "../components/ItemList";
import productList from "../mocks/productsList";
// import ItemDetailContainer from "./ItemDetailContainer";

const ItemListContainer = ({ text }) => {

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
        {/* <ItemDetailContainer id={2}/> */}
      </div>
      
      <br />

    </>
  );
};

export default ItemListContainer;
