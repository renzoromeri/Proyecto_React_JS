import * as React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../components/Item";
import productList from "../mocks/productsList";

const ItemDetailContainerB = () => {
  const [productB, setProductB] = useState([]);

  React.useEffect(() => {
    const myPromiseB = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productList);
      }, 2000);
    });
    myPromiseB.then(
      (result) => setProductB(result)
      // ()=>{}
    );
  }, []);

  const { id } = useParams();


  // aca no funciona si llamo a "productB"
  const found = productList.find((element) => element.id == id);

  console.log(productList);
  console.log(productB);
  console.log("dato: " + id);
  console.log(found);

  return (
    <div>
      <Item product={found} />;
    </div>
  );
};

export default ItemDetailContainerB;
