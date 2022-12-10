//import { TYPES } from "../Components/utils/acciones/Fav";
import React from "react";
import Card from "../Components/Card";
import { useGlobalStates } from "../Components/utils/global.context";



const Favs = () => {
  
  const { fav } = useGlobalStates();
  

  return (
    <>
      <h1>Dentists Favs</h1>
      
      <div className="card-grid">
        {fav.map((dentista) => (
          <React.Fragment key={dentista.id}>
            <Card id={dentista.id} name={dentista.name} username={dentista.username}></Card>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default Favs;
