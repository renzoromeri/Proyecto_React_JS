import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/navbar";
import ItemListContainer from "./containers/ItemListContainer";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Categorias from "./components/Categorias";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import ItemDetailContainerB from "./containers/ItemDetailContainerB";
import { CartProvider } from "./context/CartContext";
import CartView from "./components/CartView";

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavbarComponent />

        <Switch>
          <Route exact path="/">
            <ItemListContainer text={"Bienvenidos a La Botellita!!!"} />
          </Route>

          <Route exact path="/categorias">
            <Categorias />
          </Route>

          <Route path="/categorias/:id">
            <ItemDetailContainer />
          </Route>

          <Route path="/producto/:id">
            <ItemDetailContainerB />
          </Route>

          <Route exact path="/cart">
            <CartView />
          </Route>

          <Route path="*" children={<div>Not found</div>} />
        </Switch>
        {/* <footer></footer> */}
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
