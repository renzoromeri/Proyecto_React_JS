const ItemCartDetail = ({ product, remove }) => {
  return (
    <>
      <div className="card3">
        <p>{product.name}</p>
        <br />
        <p>Descripción: {product.desc}</p>
        <br />
        <p>Cantidad: {product.cant}</p>
        <br />
        <p>Precio por unidad: ${product.price}</p>
      </div>
      <div>
        <h4
          onClick={() => {
            remove(product.id);
          }}
        >
          x
        </h4>
      </div>
    </>
  );
};

export default ItemCartDetail;
