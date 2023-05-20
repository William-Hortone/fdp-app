import React from "react";
import {
  FaPhoneAlt,
  FaMapMarkedAlt,
  FaFacebook,
  FaCaretRight,
  FaEnvelope,
} from "react-icons/fa";
import "./footer.css";
import { images } from "../../constants";

const Footer = ({ color }) => {
  return (
    <div className="app__footer" style={{ backgroundColor: `${color}` }}>
      <div className="app__footer-container">
        <div className="footer-content">
          <div className="footer-content-logo">
            <img src={images.logo} alt="logo image" />
          </div>
          <p>
            Trouver l'équipement parfait pour vos besoins et profiter d'un style
            de vie plus sain et plus heureux dès aujourd'hui !
          </p>
          <p>
            <span>
              <FaFacebook />
            </span>
            facebook
          </p>
        </div>
        <div className="footer-content">
          <h2>Caracteristique</h2>
          <ul>
            <li>
              <span>
                <FaCaretRight />
              </span>
              Produits de qualite
            </li>
            <li>
              <span>
                <FaCaretRight />
              </span>
              Livraison gratuite
            </li>
            <li>
              <span>
                <FaCaretRight />
              </span>
              Excellent Serivice
            </li>
            <li></li>
          </ul>
        </div>
        <div className="footer-content">
          <h2>Contacts</h2>
          <p>
            <span>
              <FaPhoneAlt />
            </span>
            +91-9871833367
          </p>
          <p>
            <span>
              <FaEnvelope />
            </span>
            support@prido.com
          </p>
          <p>
            <span>
              <FaMapMarkedAlt />
            </span>
            Gyan Singh Market, Sector 22 Noida, UP 201301
          </p>
        </div>
      </div>
      <div className="app__footer-copyright">
        <p>Fournisseur de Proximite © 2023</p>
        <p>
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
