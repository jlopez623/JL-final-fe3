import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";

import {  Routes, Route } from "react-router-dom";
import { routes } from "./Routes/routing";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={routes.home } element={<Home />} />
        <Route path={routes.dentist} element={<Detail />} />
        <Route path={routes.contact} element={<Contact />} />
        <Route path={routes.fav} element={<Favs />} />
        <Route path="*" element={<Home />} />
      </Routes>
      

      <Footer />
    </div>
  );
}

export default App;
