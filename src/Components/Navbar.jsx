import React from "react";
import { Link } from "react-router-dom";
//import { useContextGlobal } from "../Components/utils/global.context";
import { routes } from "../Routes/routing";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  return (
    <nav className="">
     
      
      <Link to={routes.home}>Home</Link>
      <Link to={routes.contact}>Contact</Link>
      <Link to={routes.fav}>Favorites</Link>
      <button>Change theme</button>
    </nav>
  );
};

export default Navbar;
