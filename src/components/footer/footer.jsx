import React from "react"
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <img src="res/imgs/footer-img.png" className="footer-img" />
      <p className="footer-text">
        Все права принадлежат правообладателям сериала.
      </p>
      <h2 className="footer-logo">Rick & Morty WiKi</h2>
    </footer>
  )
};

export default Footer;
