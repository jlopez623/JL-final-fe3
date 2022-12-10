import axios from "axios";
import { createContext, useContext, useEffect, useState, useReducer   } from "react";

import rFav from './reducers/rFav.jsx'

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  

  const [dentistaData, setDentistaData] = useState()

  //const [state, dispatch]= useReducer(reducer, initialState)

  useEffect(()=>{
    axios('https://jsonplaceholder.typicode.com/users')
    .then((res) => setDentistaData(res.data))
  },[]);


  function startFav(initialValue) {
    return localStorage.getItem("favs")
      ? JSON.parse(localStorage.getItem("favs"))
      : initialValue;
  }
  const [stateFav, dispatchFav] = useReducer(
    rFav,
    initialState.data,
    startFav
  );
  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(stateFav));
  }, [stateFav]);

  const [fav, setFav] = useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("favs"));
    setFav(data);
  }, [stateFav]);

  

  return (
    <ContextGlobal.Provider value={{dentistaData, dispatchFav, fav}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider

export const useGlobalStates=()=>{
  return useContext(ContextGlobal)

}

