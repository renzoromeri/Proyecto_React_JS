import * as React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../components/Item";
import productList from "../mocks/productsList";

// en el prop pasaba "filtro" para que funcione como antes 
const ItemDetailContainer = () => {
  
  const [producto1, setProducto1] = useState([]);

  React.useEffect(() => {
    const myPromise2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productList);
        
      }, 2000);
    });
    myPromise2.then(
      (result) => setProducto1(result)
      // ()=>{}
    );
  }, []);

  console.log(producto1);


  const {id} = useParams();
  
  console.log("dato: " + id);

  const found = productList.filter((element) => element.idCat === id);
  
  console.log(found);




  return (
    // <div>
    //   <Item product={found} />;
    // </div>
    <div>
      {found.map((product) => {
        return <Item key={product.id} product={product} />
      })}
    </div>
  );
};

export default ItemDetailContainer;





// const [producto1, setProducto1] = useState([]);

//   React.useEffect(() => {
//     const myPromise2 = new Promise((resolve, reject) => {
//       setTimeout(() => resolve(productList), 2000);
//     });

//     myPromise2.then(
//       (result) => setProducto1(result)
//       // ()=>{}
//     );
//   }, []);

//   var nombre = filtro;
//   const productoElegido = producto1.find(pro => pro.name === nombre);
//   // const productoElegido = producto1.filter(pro => pro.name === nombre);

//   // Otra forma de hacerlo!!
//   // let productoElegido = producto1.filter(filtrar);

//   // function filtrar(obj) {
//   //   if (obj.id === dato) {
//   //     return obj;
//   //   } else {
//   //     return null;
//   //   }
//   // }

//   return (
//     <div>
//       {/* {producto1.map((product) => {
//         return <ItemDetail key={product.id} product={product} />;
//       })} */}
//       <ItemDetail product={productoElegido} />;
//     </div>
//   );
