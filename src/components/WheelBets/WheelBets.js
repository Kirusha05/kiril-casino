import React from 'react';

import BetCard from './BetCard';
import './WheelBets.css';

import pfp from '../../assets/img/social/user-pfp.png';

const generateRandomBets = () => {
  const bets = [];

  const betsNum = Math.ceil(Math.random() * 10);

  for (let i = 0; i < betsNum; i++) {
    const betAmount = Math.ceil((Math.random() * 5000) / 100) * 100;
    const newRandomBet = {
      username: 'Gxme wow fucker super bvute woohoo',
      avatarImage: pfp,
      betAmount,
    };

    bets.push(newRandomBet);
  }

  return bets;
};

const DUMMY_BETS = {
  gray: generateRandomBets(),
  red: generateRandomBets(),
  blue: generateRandomBets(),
  yellow: generateRandomBets(),
};

const WheelBets = () => {
  console.log('WheelBets');
  return (
    <div className="wheel-bets">
      <BetCard bets={DUMMY_BETS.gray} multiplier="2x" color="gray" />
      <BetCard bets={DUMMY_BETS.red} multiplier="3x" color="red" />
      <BetCard bets={DUMMY_BETS.blue} multiplier="5x" color="blue" />
      <BetCard bets={DUMMY_BETS.yellow} multiplier="50x" color="yellow" />
    </div>
  );
};

export default WheelBets;
