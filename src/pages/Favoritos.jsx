import React from "react";
import { connect } from "react-redux";
import Personaje from "../components/Personaje";
import Card from "../components/layouts/Card";
import BtnEliminarPersonaje from "../components/BtnEliminarPersonaje";
const Favoritos = ({ favoritos, dispatch }) => {
  console.log(favoritos);
  return (
    <div className="container d-flex flex-column align-items-center ">
      <h1>Favoritos</h1>
      <div className="d-flex flex-wrap align-items-center justify-content-center">
        {favoritos.map((personaje) => (
          <Card>
            <Personaje key={personaje.id} personaje={personaje}>
              <BtnEliminarPersonaje personaje={personaje} />
            </Personaje>
          </Card>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  favoritos: state.data.favoritos,
});

export default connect(mapStateToProps)(Favoritos);
