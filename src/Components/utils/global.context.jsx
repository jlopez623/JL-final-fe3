import {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
  useReducer,
} from "react";
import axios from "axios";
import { reducerFav } from "./reducer/reducerFav";
import { reducerDark } from "./reducer/reducerChangeTheme";

const initialState = { theme: "", data: [] };

export const ContextGlobal = createContext();
const ContextProvider = ({ children }) => {
  const [dentists, setDentists] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    axios(url).then((res) => setDentists(res.data));
  }, [url]);

  function initFav(initialValue) {
    return localStorage.getItem("favs")
      ? JSON.parse(localStorage.getItem("favs"))
      : initialValue;
  }
  const [stateFav, dispatchFav] = useReducer(
    reducerFav,
    initialState.data,
    initFav
  );
  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(stateFav));
  }, [stateFav]);

  const [fav, setFav] = useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("favs"));
    setFav(data);
  }, [stateFav]);

  const [stateTema, dispatchTheme] = useReducer(reducerDark, initialState);

  const providerValue = useMemo(
    () => ({dentists, setDentists, stateTheme: stateTema, dispatchTheme, stateFav, dispatchFav, fav, setFav,}), [dentists, setDentists, stateTema, dispatchTheme, stateFav, dispatchFav, fav, setFav,]
  );

  return (
    <ContextGlobal.Provider value={{ providerValue }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useContextGlobal = () => {
  return useContext(ContextGlobal);
};
