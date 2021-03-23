import ItemCartDetail from "../ItemCartDetail";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
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
  const [mail2, setMail2] = useState("");
  const [tel, setTel] = useState("");

  const remove = (id) => {
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
      let id = value.id;
      document.getElementById("idOrden").innerHTML =
        "El ID de tu orden es: " + id;
    });
    console.log(newOrder)
  };

  return (
    <>
      {cart.length !== 0 ? (
        <div>
          <section>
            <div className="ct">
              <h2 className="titulo">Tu pedido:</h2>
            </div>
            <div className="itemList">
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
            <div className="ct">
              <h2 className="titulo">
                Cantidad de Productos elegidos: {cartTotal.totalItems}
              </h2>
            </div>
            <div className="ct">
              <h2 className="titulo">Precio Total: ${cartTotal.totalCash}</h2>
            </div>
          </section>
          <section className="form">
            <h2 className="titulo">Datos personales:</h2>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  placeholder="Nombre Completo"
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  onChange={(e) => {
                    setTel(e.target.value);
                  }}
                  placeholder="Telefono"
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  onChange={(e) => {
                    setMail(e.target.value);
                  }}
                  placeholder="Email"
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  onChange={(e) => {
                    setMail2(e.target.value);
                  }}
                  placeholder="Repite tu Email"
                />
              </Form.Group>
            </Form>
          </section>
          <section>
            {mail !== "" && mail === mail2 ? (
              <div className="ct">
                <Button
                  variant="success"
                  onClick={() => {
                    finalizarCompra();
                  }}
                >
                  Realizar Compra
                </Button>
              </div>
            ) : (
              <div className="ct">
                <h3 className="form-2">
                  Revise las direcciones de mails ingresadas!!
                </h3>
              </div>
            )}
            <div className="ct">
              <Button variant="warning" onClick={cleanCart}>
                Vaciar Carrito
              </Button>
            </div>
            <div id="idOrden" className="idOrden"></div>
          </section>
        </div>
      ) : (
        <div className="ct-3">
          <div className="link">
            <h3>No hay productos seleccionados</h3>
          </div>
          <div>
            <Button variant="warning">
              <Link className="link-2" to={`/`}>
                Ir al Home
              </Link>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default CartView;
