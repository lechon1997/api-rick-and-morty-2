import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { seleccionarPersonje } from "../actions";
import { cargarPersonajesEnBusqueda } from "../actions";

const BtnVerDetallePersonaje = ({ personaje, dispatch }) => {
  let navigate = useNavigate();

  const eventSeleccionarPersonaje = () => {
    dispatch(seleccionarPersonje(personaje));
    dispatch(cargarPersonajesEnBusqueda());
    navigate(`/personajes/${personaje.id}`);
  };
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        eventSeleccionarPersonaje();
      }}
    >
      Ver información completa
    </button>
  );
};

export default connect(null)(BtnVerDetallePersonaje);
