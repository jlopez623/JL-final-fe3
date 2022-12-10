import React from "react";
import { Link } from "react-router-dom";

import { useGlobalStates } from "../Components/utils/global.context";
import { TYPES } from "./utils/acciones/Fav";

const Card = ({ name, username, id }) => {
  const {  dispatchFav  } = useGlobalStates();
  //const { stateFav, dispatchFav } = providerValue;

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage

    dispatchFav({
      type: TYPES.ADD_FAV,
      payload: { name, username, id },
    });
    alert(`${name}  ha sido añadido a tu lista de favoritos`);

  }

  return (
    <div className="card">
    <Link key={id} to={`/dentist/${id}`}>
      <img src="/images/doctor.jpg" alt="dentist" />
      <h3>{name}</h3>
      <h4>{username}</h4>
    </Link>

   
      <button onClick={addFav} className="favButton">
        🧡
      </button>
    
  </div>
  );
};

export default Card;
