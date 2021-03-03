import * as React from "react";
import { useState } from "react";
import ItemList from "../components/ItemList";
import { getFirestore } from "../firebase";
// import productList from "../mocks/productsList";

const ItemListContainer = ({ text }) => {
  const [products, setProducts] = useState([]);

  // React.useEffect(() => {
  //   const myPromise = new Promise((resolve, reject) => {
  //     setTimeout(() => resolve(productList), 2000);
  //   });

  //   myPromise.then(
  //     (result) => setProducts(result)
  //     // ()=>{}
  //   );
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
        setProducts(querySnapshot.docs.map((doc) => doc.data()));
      })
      .catch((error) => {
        console.log("Error searching items", error);
      })
      .finally(() => {
        // setLoading(false);
      });
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
        <ItemList products={products} />
      </div>

      <br />
    </>
  );
};

export default ItemListContainer;
