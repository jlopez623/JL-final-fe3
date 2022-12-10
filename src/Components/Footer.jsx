import React from "react";

const Footer = () => {
  return (
    <footer >
      <p>Powered by</p>
      <img src="/images/DH.png" alt="DH-logo" />

      <img
        className="socialMedia"
        src="/images/ico-facebook.png"
        alt="Facebook"
      />

      <img className="socialMedia" src="/images/ico-tiktok.png" alt="Tiktok" />

      <img
        className="socialMedia"
        src="/images/ico-whatsapp.png"
        alt="Whatsapp"
      />

      <img
        className="socialMedia"
        src="/images/ico-instagram.png"
        alt="Instagram"
      />
    </footer>
  );
};

export default Footer;
