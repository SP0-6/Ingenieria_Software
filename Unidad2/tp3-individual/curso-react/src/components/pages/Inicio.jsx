import { Link } from "react-router-dom";

export const Inicio = () => {
  return (
    <div className="jumbo">
      <h1>Bienvenido al blog con React</h1>
      <p>No se usa la API</p>
      <Link to="/articulos" className="button btn-success">
        Ver los artículos
      </Link>
    </div>
  );
};
