import React from "react";
import { connect } from "react-redux";
import { eliminarFavorito } from "../actions";

const BtnEliminarPersonaje = ({ personaje, dispatch }) => {
  const eventEliminarPersonaje = () => {
    dispatch(eliminarFavorito(personaje));
  };
  return (
    <button
      className="btn btn-danger"
      onClick={() => {
        eventEliminarPersonaje();
      }}
    >
      Eliminar favorito
    </button>
  );
};

export default connect(null)(BtnEliminarPersonaje);
