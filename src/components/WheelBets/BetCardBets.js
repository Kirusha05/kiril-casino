import React from 'react';

import BetAmountIcon from './BetAmountIcon';
import './BetCardBets.css';

const MAX_BETS_TO_SHOW = 10;

const BetCardBets = (props) => {
  return (
    <div className="bet-card__bets">
      {props.bets.slice(0, MAX_BETS_TO_SHOW).map((playerBet, id) => (
        <div className="player-bet" key={id}>
          <div className="player-info flex-center">
            <div className={`player-avatar lvl-${playerBet.levelRange}`}>
              <span className={`player-level lvl-${playerBet.levelRange}`}>
                {playerBet.level}
              </span>
              <img src={playerBet.avatarImage} alt="User" />
            </div>
            <p className="player-name">{playerBet.username}</p>
          </div>
          <div className="bet-amount flex-center">
            <BetAmountIcon color={props.color} />
            {playerBet.betAmount}
          </div>
        </div>
      ))}
      <div className="hover-dark"></div>
    </div>
  );
};

export default BetCardBets;
