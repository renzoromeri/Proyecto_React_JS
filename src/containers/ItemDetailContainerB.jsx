import * as React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../components/Item";
import productList from "../mocks/productsList";

const ItemDetailContainerB = () => {
  const [productB, setProductB] = useState([]);

  const { id } = useParams();

  React.useEffect(() => {
    const myPromiseB = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productList);
      }, 2000);
    });
    myPromiseB.then((result) => {
      const found = result.find((element) => element.id == id);
      setProductB(found);
    });
  }, []);

  return (
    <div>
      <Item product={productB} />;
    </div>
  );
};

export default ItemDetailContainerB;
