import "./style.css";

const ItemDetail = ({ product }) => {

  return (
    <>
      <div className="card">
        <h4>Descripción:</h4>
        <br/>
        <h4>{product.desc}</h4>
        <br/>
        <h5>Aqui va la imagen del producto!</h5>
      </div>
    </>
  );
};

export default ItemDetail;
