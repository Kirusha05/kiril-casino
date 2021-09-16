import React from 'react';
import useWindowSize from '../../hooks/use-windowSize';
import BetCardTitle from './BetCardTitle';

import './BetCard.css';
import BetCardBets from './BetCardBets';
import UserBetAmount from './UserBetAmount';

const BetCard = (props) => {
  const windowSize = useWindowSize();
  const betCardClasses = ['bet-card', props.color];
  if (props.isDisabled) betCardClasses.push('disabled');
  const bettingSum = props.bets.reduce((betSum, currentBet) => betSum + currentBet.betAmount, 0);
  const playersNum = props.bets.length;
  const sortedBets = props.bets.sort((a, b) => b.betAmount - a.betAmount);

  const cardTitleClickHandler = () => props.onCardClick(props.color);

  return (
    <div className={betCardClasses.join(' ')}>
      <UserBetAmount betAmount={props.userBet} color={props.color} />
      <BetCardTitle
        onCardTitleClick={cardTitleClickHandler}
        playersNum={playersNum}
        multiplier={props.multiplier}
        bettingSum={bettingSum}
        isDisabled={props.isDisabled}
      />
      {windowSize.width > 1000 && <BetCardBets bets={sortedBets} color={props.color} />}
    </div>
  );
};

export default BetCard;
