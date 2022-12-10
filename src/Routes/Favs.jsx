//import { TYPES } from "../Components/utils/acciones/Fav";
import React from "react";
import Card from "../Components/Card";
import { useGlobalStates } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { fav } = useGlobalStates();
  

  return (
    <>
      <h1>Dentists Favs</h1>
      
      <div className="card-grid">
        {fav.map((item) => (
          <React.Fragment key={item.id}>
            <Card id={item.id} name={item.name} username={item.username}></Card>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default Favs;
