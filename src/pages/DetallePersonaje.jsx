import React from "react";
import { connect } from "react-redux";
import CardDetalle from "../components/layouts/CardDetalle";
const DetallePersonaje = ({ personaje }) => {
  return (
    <div>
      <CardDetalle personaje={personaje} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  personaje: state.data.personaje,
});

export default connect(mapStateToProps)(DetallePersonaje);
