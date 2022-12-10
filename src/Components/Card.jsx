import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "../Components/utils/global.context";
import { TYPES } from "./utils/actions/Fav";

const Card = ({ name, username, id }) => {
  const { providerValue } = useContextGlobal();
  const { stateFav, dispatchFav } = providerValue;

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage

    dispatchFav({
      type: TYPES.ADD_FAV,
      payload: { name, username, id },
    });
    alert("The selected dentist has been added to favorites!");

  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
