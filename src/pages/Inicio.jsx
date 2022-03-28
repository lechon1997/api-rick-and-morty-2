import React from "react";
import { connect } from "react-redux";
import ListaPersonajes from "../components/layouts/ListaPersonajes";

const Inicio = () => {
  return (
    <div>
      <ListaPersonajes />
    </div>
  );
};

export default connect(null)(Inicio);
