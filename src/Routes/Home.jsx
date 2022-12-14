import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";



const Home = () => {
  const { providerValue } = useContextGlobal();
  const { dentists, } = providerValue;

  return (
    <>
    
      <main>
        <h1>Home</h1>
        <div className="card-grid">
          {dentists.map((item) => (
            <React.Fragment key={item.id}>
              <Card
                id={item.id}
                name={item.name}
                username={item.username}
                className='favButton'
              ></Card>
            </React.Fragment>
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
