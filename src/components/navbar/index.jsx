import carrito from "../Cartwidget/carrito.png";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Nav,
  // Form,
  // FormControl,
  // Button,
  Dropdown,
} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CartWidget from "../Cartwidget";
import { Link } from "react-router-dom";
import logo from "./logo-nav.png";

const NavbarComponent = () => {
  return (
    <>
      <nav className="nav">
        <Navbar.Brand>
          <Link to={"/"}>
            <img className="logo-nav" src={logo} alt="" />
          </Link>
        </Navbar.Brand>
        <Nav>
          <Nav.Link>
            <Link className="link-cat" to={"/categorias"}>
              Categorias:
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="link" to={"/categorias/vinos"}>
              Vinos
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="link" to={"/categorias/cervezas"}>
              Cervezas
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="link" to={"/categorias/gaseosas"}>
              Gaseosas
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="link" to={"/categorias/whiskys"}>
              Whiskys
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="link" to={"/categorias/espirituosos"}>
              Espirituosos
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="link" to={"/categorias/accesorios"}>
              Accesorios
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="link" to={"/categorias/promociones"}>
              Promociones
            </Link>
          </Nav.Link>
        </Nav>
        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-basic-button">
            <img src={carrito} className="carrito" alt="carrito" />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Card className="card-nav">
              <Card.Body>
                <Card.Title>
                  <Link className="link-item" to={"/cart"}>Carrito de Compras</Link>
                </Card.Title>
                <Card.Text>
                  <CartWidget/>
                </Card.Text>
              </Card.Body>
            </Card>
          </Dropdown.Menu>
        </Dropdown>
        {/* <Form inline className="nav-form">
          <FormControl type="text" placeholder="Buscar Bebida" className="mr-sm-2" />
          <Button variant="outline-info">Buscar</Button>
        </Form> */}
      </nav>
    </>
  );
};

export default NavbarComponent;
