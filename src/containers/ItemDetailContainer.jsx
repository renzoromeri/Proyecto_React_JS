import * as React from "react";
import { useState } from "react";
// import Item from "../components/Item";
import ItemDetail from "../components/ItemDetail";
import productList from "../mocks/productsList";

const ItemDetailContainer = (filtro) => {
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

  var nombre = filtro;
  const productoElegido = producto1.find(pro => pro.name === nombre);
  // const productoElegido = producto1.filter(pro => pro.name === nombre);
  

  // Otra forma de hacerlo!!
  // let productoElegido = producto1.filter(filtrar);

  // function filtrar(obj) {
  //   if (obj.id === dato) {
  //     return obj;
  //   } else {
  //     return null;
  //   }
  // }


  return (
    <div>
      {/* {producto1.map((product) => {
        return <ItemDetail key={product.id} product={product} />;
      })} */}
      <ItemDetail product={productoElegido} />;
    </div>
  );
};

export default ItemDetailContainer;
