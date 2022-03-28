import { combineReducers } from "redux";

const initialState = {
  personajes: [],
  personajes_busqueda: [],
  favoritos: [],
  episodios: [],
  mundos: [],
  personaje: {},
  busqueda: [],
};

const rootReducer = combineReducers({
  data: (state = initialState, action) => {
    switch (action.type) {
      case "CARGAR_PERSONAJES":
        return {
          ...state,
          personajes: action.payload,
          personajes_busqueda: action.payload,
        };

      case "CARGAR_EPISODIOS":
        return {
          ...state,
          episodios: action.payload,
        };

      case "CARGAR_PERSONAJES_EN_BUSQUEDA":
        return {
          ...state,
          personajes_busqueda: [...state.personajes],
        };
      case "CARGAR_MUNDOS":
        return {
          ...state,
          mundos: action.payload,
        };
      case "BUSCAR_PERSONAJE":
        return {
          ...state,
          personajes_busqueda: [
            ...state.personajes.filter((p) => p.name.includes(action.payload)),
          ],
        };

      case "SELECCIONAR_PERSONAJE":
        return {
          ...state,
          personaje: action.payload,
        };
      case "CARGAR_CATEGORIAS":
        return {
          ...state,
          categorias: action.paylaod,
        };
      case "AGREGAR_FAVORITO":
        return {
          ...state,
          ...state.favoritos.push(action.payload),
        };
      case "ELIMINAR_FAVORITO":
        return {
          ...state,
          favoritos: [
            ...state.favoritos.filter((p) => p.id !== action.payload.id),
          ],
        };
      default:
        return state;
    }
  },
});

export default rootReducer;
