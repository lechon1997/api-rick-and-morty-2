import React from "react";
import { connect } from "react-redux";
import Personaje from "../Personaje";
import Card from "./Card";
import BtnVerDetallePersonaje from "../BtnVerDetallePersonaje";
import Buscador from "../Buscador";

const ListaPersonajes = ({ personajes_busqueda, dispatch }) => {
  return (
    <div className="d-flex flex-wrap justify-content-center container">
      <Buscador />
      {personajes_busqueda.map((personaje) => (
        <div key={personaje.id}>
          <Card>
            <Personaje personaje={personaje}>
              <BtnVerDetallePersonaje personaje={personaje} />
            </Personaje>
          </Card>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  personajes_busqueda: state.data.personajes_busqueda,
});

export default connect(mapStateToProps)(ListaPersonajes);
