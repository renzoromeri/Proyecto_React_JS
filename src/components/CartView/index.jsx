import ItemCartDetail from "../ItemCartDetail";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { useState } from "react";
import { getFirestore } from "../../firebase";
import firebase from "firebase/app";
import "@firebase/firestore";

const CartView = () => {
  const { cart, removeCartItem, cleanCart, cartTotal } = useContext(
    CartContext
  );

  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [tel, setTel] = useState("");
  const [ordenId, setOrdenId] = useState("");

  const remove = (id) => {
    console.log(id);
    removeCartItem(id);
  };

  const finalizarCompra = async () => {
    const db = getFirestore();
    const OrdenesCollection = db.collection("ordenes");

    const newOrder = {
      buyer: { name: name, mail: mail, tel: tel },
      item: [...cart],
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total: cartTotal.totalCash,
    };

    OrdenesCollection.add(newOrder).then((value) => {
      console.log(value.id);
      let id = value.id;
      setOrdenId(id);
    });

    console.log(newOrder);
    console.log(ordenId);
  };

  return (
    <>
      {cart.length !== 0 ? (
        <div>
          <section>
            <h2>Datos personales:</h2>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                {/* <Form.Text className="text-muted">
                </Form.Text> */}
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  onChange={(e) => {
                    setMail(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Telefono</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => {
                    setTel(e.target.value);
                  }}
                />
              </Form.Group>
            </Form>
          </section>
          <section>
            <h2>Su carrito:</h2>
            <div className="cartwidget">
              {cart.map((item) => {
                return (
                  <ItemCartDetail
                    key={item.id}
                    product={item}
                    remove={remove}
                  />
                );
              })}
            </div>
            <div>
              <p>Cantidad de Productos elegidos: {cartTotal.totalItems}</p>
              <br />
              <p>Precio Total: {cartTotal.totalCash}</p>
              <br />
              {/* <Link to={`/cart`}>Pagar</Link> */}
              <button
                onClick={() => {
                  finalizarCompra();
                }}
              >
                Finalizar Compra
              </button>
              <br />
              <button onClick={cleanCart}>Vaciar Carrito</button>
            </div>
            <div>
              <h2>Su nº de orden es:</h2>
              <h3>{ordenId}</h3>
            </div>
          </section>
        </div>
      ) : (
        <div>
          <p>No hay productos seleccionados"</p>
          <Link to={`/`}>Ir al Home</Link>
        </div>
      )}
    </>
  );
};

export default CartView;

{
  /* <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form> */
}
