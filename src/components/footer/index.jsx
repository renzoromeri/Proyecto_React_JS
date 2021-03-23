import logo from "../navbar/logo-nav.png";
import "./style.css";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <div className="fondo-foot">
        <section className="footer">
      <section className="c4-foot">
        <div>
          <Link className="link" to={"/"}>Quines Somos</Link>
        </div>
        <div>
          <Link className="link" to={"/"}>Trabaja con Nosotros</Link>
        </div>
        <div>
          <Link className="link" to={"/"}>Condiciones de Compra</Link>
        </div>
        <div>
          <Link className="link" to={"/"}>Ventas al por mayor</Link>
        </div>

        <div>
          <Link className="link" to={"/"}>Quiero una franquicia</Link>
        </div>
      </section>
      <section className="c5-foot">
        <img className="logo-nav" src={logo} alt="" />
      </section>
      <section className="c5-foot">
        <p className="mov">2021 - La Botellita - Almacen de Bebidas </p>
      </section>
      </section>
    </div>
  );
};

export default FooterComponent;
