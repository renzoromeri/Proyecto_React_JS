import carrito from "../Cartwidget/carrito.png";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  // NavDropdown,
  Dropdown,
} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CartWidget from "../Cartwidget";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <Link style={{ color: "white" }} to={"/"}>
            La Botellita
          </Link>
        </Navbar.Brand>
        {/* <Navbar.Brand href="/">La Botellita</Navbar.Brand> */}
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to={"/categorias"}>Categorias:</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to={"/categorias/vinos"}>Vinos</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to={"/categorias/cervezas"}>Cervezas</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to={"/categorias/gaseosas"}>Gaseosas</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to={"/categorias/whiskys"}>Whiskys</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to={"/categorias/espirituosos"}>Espirituosos</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to={"/categorias/accesorios"}>Accesorios</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to={"/categorias/promociones"}>Promociones</Link>
          </Nav.Link>
        </Nav>

        <Dropdown style={{ margin: "7px" }}>
          <Dropdown.Toggle variant="primary" id="dropdown-basic-button">
            <img
              src={carrito}
              className="carrito"
              alt="carrito"
              style={{ width: "30px", height: "30px" }}
            />
            {/* <p>( {cartTotal.totalItems} )</p> */}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Card style={{ width: "18rem" }}>
              {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
              <Card.Body>
                <Card.Title>Carrito de compras</Card.Title>
                <Card.Text>
                  <CartWidget />
                </Card.Text>
              </Card.Body>
            </Card>
          </Dropdown.Menu>
        </Dropdown>

        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Buscar</Button>
        </Form>
      </Navbar>
    </>
  );
};

export default NavbarComponent;