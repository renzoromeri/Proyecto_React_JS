import * as React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../components/Item";
import { getFirestore } from "../firebase";

const ItemDetailContainerB = () => {
  const [productB, setProductB] = useState([]);

  React.useEffect(() => {
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
      .finally(() => {});
  }, []);

  const { id } = useParams();

  const found = productB.filter((element) => element.id === id);

  return (
    <div>
      <div className="ct">
        <h1 className="titulo"> ¿¿Cuantos quieres??</h1>
      </div>
      <div className="itemList">
        {found.map((product) => {
          return <Item key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default ItemDetailContainerB;
