import * as React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../components/Item";
// import productList from "../mocks/productsList";
import { getFirestore } from "../firebase";

const ItemDetailContainerB = () => {
  const [productB, setProductB] = useState([]);

  // React.useEffect(() => {
  //   const myPromiseB = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(productList);
  //     }, 2000);
  //   });
  //   myPromiseB.then((result) => {
  //     const found = result.find((element) => element.id == id);
  //     setProductB(found);
  //   });
  // }, []);

  React.useEffect(() => {
    // setLoading(true);
    const db = getFirestore();
    const itemCollection = db.collection("productos");
    itemCollection
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("No results");
        }
        setProductB(querySnapshot.docs.map((doc) => doc.data()));
      })
      .catch((error) => {
        console.log("Error searching items", error);
      })
      .finally(() => {
        // setLoading(false);
      });
  }, []);

  const { id } = useParams();
  // const found = productB.find((element) => element.id == id);

  const found = productB.filter((element) => element.id === id);

  console.log(id);
  console.log(found);

  return (
    <div>
      {found.map((product) => {
        return <Item key={product.id} product={product} />;
      })}
    </div>
  );

  // return (
  //   <div>
  //     <Item product={found} />;
  //   </div>
  // );
};

export default ItemDetailContainerB;
