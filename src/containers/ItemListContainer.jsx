import * as React from "react";
import { useState } from "react";
import ItemList from "../components/ItemList";
import { getFirestore } from "../firebase";
import logo from "./logo.png";

const ItemListContainer = ({ text }) => {
  const [products, setProducts] = useState([]);

  React.useEffect(() => {
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
      .finally(() => {});
  }, []);

  return (
    <>
      <section>
        <div className="ct">
          <img className="logo-tit" src={logo} alt="" />
        </div>
        <div className="ct">
          <h1 className="titulo"> {text}</h1>
        </div>
        <section className="comic-hostel">
        <div className="main">
          <ItemList products={products} />
        </div>
        </section>
      </section>
    </>
  );
};

export default ItemListContainer;
