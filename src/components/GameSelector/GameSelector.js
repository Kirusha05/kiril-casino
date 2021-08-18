import React from 'react';

import GameCard from './GameCard';
import './GameSelector.css';

const CARDS_DATA = [
  { title: 'Wheel Of Fortune', to: '/wheel' },
  { title: 'Crash', to: '/crash' },
  { title: 'Dice', to: '/dice' },
  { title: 'Coinflip', to: '/coinflip' },
];

const GameSelector = () => {
  return (
    <div className="game-selector">
      {CARDS_DATA.map((cardData, id) => (
        <GameCard key={id} title={cardData.title} to={cardData.to} imgLink={cardData.imgLink} />
      ))}
    </div>
  );
};

export default GameSelector;
