import { TYPES } from "../acciones/Fav";
export default function rFav(state, action) {
  switch (action.type) {
    case TYPES.ADD_FAV: {
      return [...state, action.payload];
    }
       
    default: {
      throw new Error();
    }
  }
}