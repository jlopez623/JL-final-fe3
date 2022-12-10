import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../Routes/routes";
import { useContextGlobal } from "../Components/utils/global.context";
import { TYPES } from "./utils/reducer/ChangeThemeAction";

const Navbar = () => {
  const { providerValue } = useContextGlobal();
  const { dispatchTheme, stateTheme } = providerValue;
  const handleChangeTheme = () => {
    stateTheme.theme === (stateTheme.theme = "")
      ? dispatchTheme({ type: TYPES.DARK })
      : dispatchTheme({ type: TYPES.LIGHT });
  };

  return (
    <nav className={stateTheme.theme}>
      <Link to={routes.home}>Home</Link>
      <Link to={routes.contact}>Contact</Link>
      <Link to={routes.fav}>Favorites</Link>

      <>
        {stateTheme.theme === "" ? (
          <button onClick={handleChangeTheme}>Change Theme</button>
        ) : (
          <button onClick={handleChangeTheme}>Change Theme</button>
        )}
      </>
    </nav>
  );
};

export default Navbar;
