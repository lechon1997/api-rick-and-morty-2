import React from "react";
import { agregarFavorito } from "../../actions";
import { connect } from "react-redux";
const CardDetalle = ({ personaje, dispatch }) => {
  const addFavorite = () => {
    dispatch(agregarFavorito(personaje));
  };
  return (
    <div className="container p-0 card mb-3 max-width-800px">
      <div className="row g-0">
        <div className="col-md-3">
          <img
            src={personaje.image}
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-8 d-flex ">
          <div className="card-body">
            <h5 className="card-title">{personaje.name}</h5>
            <div className="d-flex mb-1">
              <p className="m-0">Identificación: </p>
              <p className="m-0 ms-2">{personaje.id}</p>
            </div>
            <div className="d-flex mb-1">
              <p className="m-0">Genero: </p>
              <p className="m-0 ms-2">{personaje.gender}</p>
            </div>
            <div className="d-flex mb-1">
              <p className="m-0">Origen:</p>
              <p className="m-0 ms-2">{personaje.origin.name}</p>
            </div>
            <div className="d-flex mb-1">
              <p className="m-0">Estatus:</p>
              <p className="m-0 ms-2">{personaje.status}</p>
            </div>
            <div className="d-flex mb-1">
              <p className="m-0">Especie:</p>
              <p className="m-0 ms-2">{personaje.species}</p>
            </div>
            <div className="d-flex mb-1">
              <p className="m-0">Ubicación:</p>
              <p className="m-0 ms-2">{personaje.location.name}</p>
            </div>
            <div className="d-flex mb-1">
              <p className="m-0">Creado:</p>
              <p className="m-0 ms-2">{personaje.created}</p>
            </div>
          </div>
        </div>
        <div className="col-md-1">
          <div className="d-flex justify-content-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-heart-fill m-3 corazon"
              viewBox="0 0 16 16"
              onClick={() => {
                addFavorite();
              }}
            >
              <path
                fill-rule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="row g-0">
        <div className="col-md-12"></div>
      </div>
    </div>
  );
};

export default connect(null)(CardDetalle);
