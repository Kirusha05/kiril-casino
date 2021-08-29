import React from 'react';
import BetCardTitle from './BetCardTitle';

import './BetCard.css';
import BetCardBets from './BetCardBets';

const BetCard = (props) => {
  const betCardClasses = ['bet-card', props.color].join(' ');
  const bettingSum = props.bets.reduce((betSum, currentBet) => betSum + currentBet.betAmount, 0);
  const playersNum = props.bets.length;
  const sortedBets = props.bets.sort((a, b) => b.betAmount - a.betAmount);

  return (
    <div className={betCardClasses}>
      <BetCardTitle
        playersNum={playersNum}
        multiplier={props.multiplier}
        bettingSum={bettingSum}
      />
      <BetCardBets bets={sortedBets} color={props.color} />
    </div>
  );
};

export default BetCard;
