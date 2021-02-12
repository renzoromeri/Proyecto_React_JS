import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/navbar";
import ItemListContainer from "./containers/ItemListContainer";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import ItemDetailContainer from "./containers/ItemDetailContainer";

const App = () => {
  
  var producto = 21;
  // var id = 2;
  // var nombre = "Vino";

  return (
    <BrowserRouter>

      <NavbarComponent text={producto} />

      <Switch>

        <Route extact path="/">

          <ItemListContainer text={"Bienvenidos a La Botellita!!!"} />
          
          {/* <ItemDetailContainer filtro={nombre}/> */}

        </Route>

        {/* <Route extact path="/contacto">

          <SegundoContainer text={"Bienvenidos a La Botellita!!!"} />

        </Route> */}

        <Route path="*" children={<div>Not found</div>} />

      </Switch>
      {/* <footer></footer> */}
    </BrowserRouter>
  );
};

export default App;



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
