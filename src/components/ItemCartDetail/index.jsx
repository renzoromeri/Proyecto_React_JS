import { Button } from "react-bootstrap";

const ItemCartDetail = ({ product, remove }) => {
  return (
    <>
      <div className="panel-item">
        <div className="c5-item">
          <div className="c5-item">
            <img className="pequena-host" src={product.img} alt="carrito" />
          </div>
          <br />
          <h3 className="link-item">{product.name}</h3>
          <br />
          <p>{product.desc}</p>
          <br />
          <p className="link-2">Cantidad de unidades: {product.cant}</p>
          <br />
          <p className="link-2">Precio por unidad: ${product.price}</p>
        </div>
        <div className="dropdown">
          <Button
            variant="danger"
            onClick={() => {
              remove(product.id);
            }}
          >
            Eliminar
          </Button>
        </div>
      </div>
    </>
  );
};

export default ItemCartDetail;
