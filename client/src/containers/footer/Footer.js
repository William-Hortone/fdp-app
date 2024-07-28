import React from "react";
import {
  FaCaretRight,
  FaEnvelope,
  FaFacebook,
  FaMapMarkedAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { images } from "../../constants";
import "./footer.css";

const Footer = ({ color, colorLink }) => {
  const newDate = new Date();
  const currentYear = newDate.getFullYear();

  return (
    <div
      className="app__footer"
      id="contact"
      style={{ backgroundColor: `${color}` }}
    >
      <div className="app__footer-container">
        <div className="footer-content" style={{ color: `${colorLink}` }}>
          <div className="footer-content-logo">
            <img src={images.logo} alt="logo" />
          </div>
          <p style={{ color: `${colorLink}` }}>
            Trouver l'équipement parfait pour vos besoins et profiter d'un style
            de vie plus sain et plus heureux dès aujourd'hui !
          </p>
          <a
            target="blank"
            href="https://www.facebook.com/Fournisseurdeproximite"
          >
            <p style={{ color: `${colorLink}` }}>
              <span>
                <FaFacebook />
              </span>
              Facebook
            </p>
          </a>
        </div>
        <div className="footer-content" style={{ color: `${colorLink}` }}>
          <h2>Caracteristique</h2>
          <ul>
            <li style={{ color: `${colorLink}` }}>
              <span>
                <FaCaretRight />
              </span>
              Produits de qualité
            </li>
            <li style={{ color: `${colorLink}` }}>
              <span>
                <FaCaretRight />
              </span>
              Livraison gratuite
            </li>
            <li style={{ color: `${colorLink}` }}>
              <span>
                <FaCaretRight />
              </span>
              Excellent Serivice
            </li>
            <li></li>
          </ul>
        </div>
        <div className="footer-content" style={{ color: `${colorLink}` }}>
          <h2>Contacts</h2>
          <p style={{ color: `${colorLink}` }}>
            <span>
              <FaPhoneAlt />
            </span>
            +241 77066605
          </p>
          <p style={{ color: `${colorLink}` }}>
            <span>
              <FaEnvelope />
            </span>
            fournisseurdp@gmail.com
          </p>
          <p style={{ color: `${colorLink}` }}>
            <span>
              <FaMapMarkedAlt />
            </span>
            Libreville / Nzeng-Ayong
          </p>
        </div>
      </div>
      <div className="app__footer-copyright">
        <p style={{ color: `${colorLink}` }}>Fournisseur de Proximite © {currentYear}</p>
        <p style={{ color: `${colorLink}` }}>
          Developed by
          <a
            href="https://williamhortone.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            William Hortone
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
