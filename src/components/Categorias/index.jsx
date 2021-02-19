import vino from "../ItemDetail/vino.png";
import { Link } from "react-router-dom";

const Categorias = () => {
  const listaCategorias = [
    {
      name: "vinos",
      rout: vino,
    },
    {
      name: "cervezas",
      rout: vino,
    },
    {
      name: "gaseosas",
      rout: vino,
    },
    {
      name: "whiskys",
      rout: vino,
    },
    {
      name: "espirituosos",
      rout: vino,
    },
    {
      name: "accesorios",
      rout: vino,
    },
    {
      name: "promociones",
      rout: vino,
    },
  ];

  return (
    <div>
      {listaCategorias.map((element) => {
        return (
          <>
            <img src={element.rout} width="80" alt="" />
            <Link to={`/categorias/${element.name}`}>{element.name}</Link>
          </>
        );
      })}
    </div>
  );
};

export default Categorias;
