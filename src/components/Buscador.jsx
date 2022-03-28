import React, { useState } from "react";
import { connect } from "react-redux";
import { buscarPersonaje } from "../actions";
import "../estilos/global.scss";

const Buscador = ({ resultado, dispatch }) => {
  const handleInputChange = (event) => {
    dispatch(buscarPersonaje(event.target.value));
  };
  return (
    <div className="w-100">
      <div className="w-100 d-flex justify-content-center">
        <input
          className=" mt-4 wid-buscador min-width-300px"
          name="buscador"
          type="text"
          onChange={handleInputChange}
          placeholder="Buscar personaje"
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  resultado: state.data.busqueda,
});
export default connect(mapStateToProps)(Buscador);
