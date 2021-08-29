import React from "react";
import { Link } from "react-router-dom";

import "./GameCard.css";

const GameCard = ({ title, to, imgLink }) => {
  return (
    <div className="game-card">
      <Link to={to}>
        <div
          className="game-card__image"
          style={{ backgroundImage: `url(${imgLink})` }}
        >
          {/* <img src={imgLink} alt="Game Background" /> */}
        </div>
        <h2>{title}</h2>
      </Link>
    </div>
  );
};

export default GameCard;
