import React from "react";
import Form from "../Components/Form";
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  //const { providerValue } = useContextGlobal();
  //const { stateTheme } = providerValue;
  //className={stateTheme.theme} esto se pondría en el div
  return (
    <div>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form />
    </div>
  );
};

export default Contact;
