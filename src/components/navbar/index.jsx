import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { CartContext } from "../../context/CartContext";
import CartWidget from "../cartwidget";

const NavbarComponent = () => {

  const {cart, cartSize} = useContext(CartContext);
  
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">La Botellita</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/categorias">Categorias:</Nav.Link>
          <Nav.Link href="/categorias/vinos">Vinos</Nav.Link>
          <Nav.Link href="/categorias/cervezas">Cervezas</Nav.Link>
          <Nav.Link href="/categorias/gaseosas">Gaseosas</Nav.Link>
          <Nav.Link href="/categorias/whiskys">Whiskys</Nav.Link>
          <Nav.Link href="/categorias/espirituosos">Espirituosos</Nav.Link>
          <Nav.Link href="/categorias/accesorios">Accesorios</Nav.Link>
          <Nav.Link href="/categorias/promociones">Promociones</Nav.Link>
        </Nav>
        <NavDropdown title="Carrito" id="nav-dropdown">
          <Card style={{ width: "18rem" }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title>Productos Seleccionados</Card.Title>
              <Card.Text>
                Estos productos has elegidos para comprar.
                <CartWidget cart={cart} size={cartSize}/>
              </Card.Text>
              <Button variant="primary">Ver</Button>

            </Card.Body>
          </Card>
        </NavDropdown>

        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Buscar</Button>
        </Form>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
