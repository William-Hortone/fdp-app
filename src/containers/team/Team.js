import React from "react";
import "./team.css";
import { images } from "../../constants";

const Team = () => {
  return (
    <div className="app__team">
      <div className="app__team-container">
        <img src={images.logo} alt="photo image" className="team-img" />

        <h3>Founisseur de proximite</h3>
        <p>
          " Nous offrons une large gamme d'équipements sportifs de qualité
          supérieure, de machines, d'écouteurs et plus encore pour vous aider à
          rester actif et à atteindre vos objectifs de remise en forme. Nos
          produits sont soigneusement sélectionnés pour garantir durabilité,
          confort et performance. Trouver l'équipement parfait pour vos besoins
          et profiter d'un style de vie plus sain et plus heureux dès
          aujourd'hui ! "
        </p>
      </div>
    </div>
  );
};

export default Team;
