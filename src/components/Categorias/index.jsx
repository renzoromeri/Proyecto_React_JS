import vino from "../Categorias/vino.png";
import beer from "../Categorias/beer.png";
import gaseosa from "../Categorias/gaseosa.png";
import whiskey from "../Categorias/whiskey.png";
import absinthe from "../Categorias/absinthe.png";
import corkscrew from "../Categorias/corkscrew.png";
import alcohol from "../Categorias/alcohol.png";
import "./style.css";
import { Link } from "react-router-dom";

const Categorias = () => {
  const listaCategorias = [
    {
      name: "Vinos",
      rout: vino,
    },
    {
      name: "Cervezas",
      rout: beer,
    },
    {
      name: "Gaseosas",
      rout: gaseosa,
    },
    {
      name: "Whiskys",
      rout: whiskey,
    },
    {
      name: "Espirituosos",
      rout: absinthe,
    },
    {
      name: "Accesorios",
      rout: corkscrew,
    },
    {
      name: "Promociones",
      rout: alcohol,
    },
  ];

  return (
    <>
      <div className="cat">
        <h2 className="titulo">Categorias de Productos</h2>
      </div>
      <div className="cat">
        {listaCategorias.map((element) => {
          return (
            <>
              <Link className="link" to={`/categorias/${element.name}`}>
                <div className="cat-2">
                  <img className="img-cat" src={element.rout} alt="" />
                  <h4>{element.name}</h4>
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Categorias;
