import React from "react";
//import Card from '../Components/Card'
import { useGlobalStates } from "../Components/utils/global.context";
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { dentistaData } = useGlobalStates();
  return (
    <>
      <main>
        <h1>Home</h1>
        <div className="card-grid">
          {dentistaData.map((dentista) => (
            <React.Fragment key={dentista.id}>
              <Card
                id={dentista.id}
                name={dentista.name}
                username={dentista.username}
              ></Card>
            </React.Fragment>
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
