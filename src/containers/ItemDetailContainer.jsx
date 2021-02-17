import * as React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../components/Item";
import productList from "../mocks/productsList";

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

  const { id } = useParams();

  const found = producto1.filter((element) => element.idCat === id);

  return (
    <div>
      {found.map((product) => {
        return <Item key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ItemDetailContainer;
