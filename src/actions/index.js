const URL_BASE = "https://rickandmortyapi.com/api";

export function fetchPersonajes() {
  return async (dispatch) => {
    const response = await fetch(`${URL_BASE}/character`, {
      method: "GET",
    });

    const { results } = await response.json();
    dispatch({ type: "CARGAR_PERSONAJES", payload: results });
  };
}

export function fetchEpisodios() {
  return async (dispatch) => {
    const response = await fetch(`${URL_BASE}/episode`, {
      method: "GET",
    });

    const { results } = await response.json();
    dispatch({ type: "CARGAR_EPISODIOS", payload: results });
  };
}

export function fetchMundos() {
  return async (dispatch) => {
    const response = await fetch(`${URL_BASE}/location`, {
      method: "GET",
    });

    const { results } = await response.json();
    dispatch({ type: "CARGAR_MUNDOS", payload: results });
  };
}

export function seleccionarPersonje(personaje) {
  return async (dispatch) => {
    dispatch({ type: "SELECCIONAR_PERSONAJE", payload: personaje });
  };
}

export function agregarFavorito(personaje) {
  return async (dispatch) => {
    dispatch({ type: "AGREGAR_FAVORITO", payload: personaje });
  };
}

export function eliminarFavorito(personaje) {
  return async (dispatch) => {
    dispatch({ type: "ELIMINAR_FAVORITO", payload: personaje });
  };
}

export function buscarPersonaje(busqueda) {
  return async (dispatch) => {
    dispatch({ type: "BUSCAR_PERSONAJE", payload: busqueda });
  };
}

export function cargarPersonajesEnBusqueda() {
  return async (dispatch) => {
    dispatch({ type: "CARGAR_PERSONAJES_EN_BUSQUEDA" });
  };
}
