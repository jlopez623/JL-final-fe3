import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  //const { providerValue } = useContextGlobal();
  //const { stateTheme } = providerValue;
  //className={stateTheme.theme} acá el fragment lo cambiaría por div y le pondría ésta className
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { id } = useParams();

  const [dentist, setDentist] = useState([]);
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  useEffect(() => {
    axios(url).then((res) => setDentist([res.data]));
  }, []);
  return (
    <>
      <h1>Detail Dentist ID: {id} </h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {dentist.map((dentist) => (
            <tr key={dentist.id}>
              <td>{dentist.name}</td>
              <td>{dentist.email}</td>
              <td>{dentist.phone}</td>
              <td>{dentist.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Detail;
