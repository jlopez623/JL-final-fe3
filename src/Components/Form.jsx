import React from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  return (
    <div>
      <form action="/registro" >
          <input
            
            type="text"
            name="fullName"
            placeholder="Full Name"
            
          />
          <input
            
            type="text"
            name="email"
            placeholder="Email"
           
          />
          <button type="submit">Send</button>
        </form>
    </div>
  );
};

export default Form;