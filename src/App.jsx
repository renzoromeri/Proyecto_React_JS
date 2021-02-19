import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/navbar";
import ItemListContainer from "./containers/ItemListContainer";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Categorias from "./components/Categorias";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import ItemDetailContainerB from "./containers/ItemDetailContainerB";

const App = () => {
  var producto = 21;

  return (
    <BrowserRouter>
      <NavbarComponent text={producto} />

      <Switch>
        <Route exact path="/">
          <ItemListContainer text={"Bienvenidos a La Botellita!!!"} />

          {/* <ItemDetailContainer filtro={nombre}/> */}
        </Route>

        <Route exact path="/categorias">
          <Categorias/>
        </Route>
        <Route path="/categorias/:id">
          <ItemDetailContainer/>
        </Route>

        <Route path="/producto/:id">
        <ItemDetailContainerB />
        </Route>

        <Route path="*" children={<div>Not found</div>} />
      </Switch>
      {/* <footer></footer> */}
    </BrowserRouter>
  );
};

export default App;
