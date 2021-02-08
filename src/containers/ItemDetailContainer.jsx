import * as React from "react";
import { useState } from "react";
// import Item from "../components/Item";
import ItemDetail from "../components/ItemDetail";
import productList from "../mocks/productsList";

const ItemDetailContainer = (id) => {
  
    const [producto1, setProducto1] = useState([]);

  React.useEffect(() => {
    const myPromise2 = new Promise((resolve, reject) => {
      setTimeout(() => resolve(productList), 2000);
    });

    myPromise2.then(
      (result) => setProducto1(result)
      // ()=>{}
    );
  }, []);

  var productoElegido = producto1[id];

  return (
    <>

      <div>
        <ItemDetail product={productoElegido} />
      </div>
      <br />
    </>
  );
};

export default ItemDetailContainer;
