

import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";
import { TYPES } from "../Components/utils/reducer/FavAction";


const Favs = () => {
  const { providerValue } = useContextGlobal();
  const { dispatchFav, fav } = providerValue;

  const removeAll = (e) => {
    e.preventDefault();
    dispatchFav({
      type: TYPES.REMOVE_ALL,
    });
  };

  return (
    <>
      <h1>Dentists Favs</h1>
      <button onClick={removeAll}>Delete all Favourites Dentist</button>
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
