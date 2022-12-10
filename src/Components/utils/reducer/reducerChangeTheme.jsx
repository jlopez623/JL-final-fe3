import { TYPES } from "./ChangeThemeAction";
export const reducerDark = (state, action) => {
  switch (action.type) {
    case TYPES.LIGHT:
      return {
        theme: (state.theme = ""),
      };
    case TYPES.DARK:
      return {
        theme: (state.theme = "dark"),
      };
    default: {
      throw new Error();
    }
  }
};
