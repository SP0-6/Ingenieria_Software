import { useState, useEffect } from "react";

export const Articulos = () => {
  const [articulos, setArticulos] = useState([]);

  useEffect(() => {
    conseguirArticulos();
  }, []);

  const conseguirArticulos = () => {
    setArticulos([
      {
        _id: "1",
        titulo: "Artículo de prueba 1",
        contenido: "Contenido 1",
      },
      {
        _id: "2",
        titulo: "Artículo de prueba 2",
        contenido: "Contenido 2",
      },
    ]);
  };

  return (
    <>
      {articulos.length >= 1 ? (
        articulos.map((articulo) => (
          <article key={articulo._id} className="articulo-item">
            <div className="mascara">
              <img src="src\assets\article-img.png" alt="Imagen relacionada" />
            </div>

            <div className="datos">
              <h3 className="title">{articulo.titulo}</h3>

              <p className="description">{articulo.contenido}</p>

              <div className="botones">
                <button className="edit">Editar</button>
                <button className="delete">Borrar</button>
              </div>
            </div>
          </article>
        ))
      ) : (
        <h1>No hay artículos</h1>
      )}
    </>
  );
};
