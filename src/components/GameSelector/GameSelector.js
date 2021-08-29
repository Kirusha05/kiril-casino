import React from "react";

import GameCard from "./GameCard";
import "./GameSelector.css";

import wheelBg from "../../assets/img/games-related/wheel-select.png";
import crashBg from "../../assets/img/games-related/crash-select.png";
import diceBg from "../../assets/img/games-related/dice-select.png";

const CARDS_DATA = [
  { title: "Wheel Of Fortune", to: "/wheel", imgLink: wheelBg },
  { title: "Crash", to: "/crash", imgLink: crashBg },
  { title: "Dice", to: "/dice", imgLink: diceBg },
  { title: "Coinflip", to: "/coinflip", imgLink: wheelBg },
];

const GameSelector = () => {
  return (
    <div className="game-selector">
      {CARDS_DATA.map((cardData, id) => (
        <GameCard
          key={id}
          title={cardData.title}
          to={cardData.to}
          imgLink={cardData.imgLink}
        />
      ))}
    </div>
  );
};

export default GameSelector;
