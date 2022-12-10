import { TYPES } from "./FavAction";
export function reducerFav(state, action) {
  switch (action.type) {
    case TYPES.ADD: {
      return [...state, action.payload];
    }
    case TYPES.REMOVE: {
      return state.filter((i) => i.id !== action.payload);
    }
    case TYPES.REMOVE_ALL: {
      return [];
    }
    default: {
      throw new Error();
    }
  }
}
