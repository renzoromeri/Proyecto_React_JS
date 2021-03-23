import { Button } from "react-bootstrap";

const ItemCart = ({ product, remove }) => {
  return (
    <>
      <div className="ItemCart">
        <div className="card2">
          <h4 className="link-2">{product.name}</h4>
          <br />
          <p>Cantidad: {product.cant}</p>
        </div>
        <div>
          <Button
            variant="danger"
            onClick={() => {
              remove(product.id);
            }}
          >
            {" "}
            x{" "}
          </Button>
        </div>
      </div>
    </>
  );
};

export default ItemCart;
