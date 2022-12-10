import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { id } = useParams();

  const [dentista, setDentista] = useState([]);
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  useEffect(() => {
    axios(url).then((res) => setDentista([res.data]));
  }, [url]);

 

  return (
    <>
      <h1>Detail Dentist id </h1>
      

      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Teléfono</th>
            <th>Página Web</th>
          </tr>
        </thead>
        <tbody>
          {dentista.map((dentista) => (
            <tr key={dentista.id}>
              <td>{dentista.name}</td>
              <td>{dentista.phone}</td>
              <td>{dentista.website}</td>
              <td>{dentista.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Detail;
