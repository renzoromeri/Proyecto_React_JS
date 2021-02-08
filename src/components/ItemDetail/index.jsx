import "./style.css";

const ItemDetail = ({ product }) => {
  

  return (
    <>
      <div className="card">
        <h2>{product.name}</h2>
        <br/>
        <h3>$ {product.price}</h3>
      </div>
    </>
  );
};

export default ItemDetail;
