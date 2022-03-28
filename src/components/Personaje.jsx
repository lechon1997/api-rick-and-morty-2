import React from "react";

const Personaje = ({ children, personaje }) => {
  return (
    <div className="card img m-4">
      <img src={personaje.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{personaje.name}</h5>
        <p className="card-text">
          <p className="m-0">Status: {personaje.status}</p>
          <p className="m-0">Creado: {personaje.created}</p>
          <p className="m-0 two_lines">Origen: {personaje.origin.name}</p>
        </p>
        {children}
      </div>
    </div>
  );
};

export default Personaje;
