import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/navbar';
import ItemListContainer from './containers/ItemListContainer';

const App = () => {
  var producto = 21
  return (
    <>    
    <NavbarComponent text={producto}/>

    <ItemListContainer text={'Bienvenidos a La Botellita!!!'}/>

    {/* <button className="btn btn-primary btn-success">Exito!</button> */}

    </>
  );
}

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
