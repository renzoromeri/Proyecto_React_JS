import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar,Nav,Form,FormControl,Button,NavDropdown} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CartWidget from '../cartwidget';


const NavbarComponent = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">La Botellita</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Vinos</Nav.Link>
          <Nav.Link href="#features">Cervezas</Nav.Link>
          <Nav.Link href="#pricing">Gaseosas</Nav.Link>
          <Nav.Link href="#pricing">Whiskys</Nav.Link>
          <Nav.Link href="#pricing">Espirituosos</Nav.Link>
          <Nav.Link href="#pricing">Accesorios</Nav.Link>
          <Nav.Link href="#pricing">Promociones</Nav.Link>
        </Nav>
        <Nav.Item className="mr-auto">
        <CartWidget></CartWidget>
        </Nav.Item>
        <NavDropdown title="Carrito" id="nav-dropdown">
            <Card style={{ width: "18rem" }}>
              {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
              <Card.Body>
                <Card.Title>Productos Seleccionados</Card.Title>
                <Card.Text>
                  Estos productos has elegidos para comprar.
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
