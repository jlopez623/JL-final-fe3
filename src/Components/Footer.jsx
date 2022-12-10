import React from "react";
import { useContextGlobal } from "./utils/global.context";
const Footer = () => {
  const { providerValue } = useContextGlobal();
  const { stateTheme: stateDark } = providerValue;

  return (
    
    <footer className={stateDark.theme}>
      
      <p>Powered by</p>
      <img src="/images/DH.png" alt="DH-logo" />

      <img
        className="redes"
        src="/images/ico-instagram.png"
        alt="Instagram"
      />

      <img
        className="redes"
        src="/images/ico-facebook.png"
        alt="Facebook"
      />

      <img className="socialMedia" src="/images/ico-tiktok.png" alt="Tiktok" />

      <img
        className="redes"
        src="/images/ico-whatsapp.png"
        alt="Whatsapp"
      />
    </footer>
  );
};

export default Footer;
