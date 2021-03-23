import * as React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../components/Item";
import { getFirestore } from "../firebase";

const ItemDetailContainer = () => {
  const [producto1, setProducto1] = useState([]);

  React.useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("productos");
    itemCollection
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("No results");
        }
        setProducto1(querySnapshot.docs.map((doc) => doc.data()));
      })
      .catch((error) => {
        console.log("Error searching items", error);
      })
      .finally(() => {});
  }, []);

  const { id } = useParams();

  const found = producto1.filter((element) => element.idCat === id);

  return (
    <div>
      <div className="ct">
        <h1 className="titulo"> {id}</h1>
      </div>
      <div className="itemList">
        {found.map((product) => {
          return <Item key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default ItemDetailContainer;
