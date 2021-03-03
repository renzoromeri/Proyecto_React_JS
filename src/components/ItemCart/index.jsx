const ItemCart = ({ product, remove }) => {
  
  return (
    <>
      <div className="card2">
        <p>{product.name}</p>
        <br />
        <p>Cantidad: {product.cant}</p>
      </div>
      <div>
      <h4 onClick={() => {remove(product.id);}}>x</h4>
      </div>
    </>
  );
};

export default ItemCart;
