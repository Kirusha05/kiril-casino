import React from 'react';

import BetCard from './BetCard';
import './WheelBets.css';

import pfp from '../../assets/img/social/user-pfp.png';

const randomItemFromArray = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const DUMMY_PLAYERS = [
  'Gxme',
  'Kirusha',
  'Vector_359',
  'notGurrNick',
  'Anonym0us123',
];

const generateRandomBets = () => {
  const bets = [];

  const betsNum = Math.ceil(Math.random() * 30);

  for (let i = 0; i < betsNum; i++) {
    const betAmount = Math.ceil((Math.random() * 5000) / 100) * 100;
    const randomLvl = Math.ceil(Math.random() * 99);
    const randomLvlRange = Math.floor(randomLvl / 10) * 10;

    const newRandomBet = {
      username: randomItemFromArray(DUMMY_PLAYERS),
      avatarImage: pfp,
      level: randomLvl,
      levelRange: randomLvlRange,
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

const WheelBets = (props) => {
  return (
    <div className="wheel-bets">
      <BetCard
        userBet={props.userBets.gray}
        bets={DUMMY_BETS.gray}
        multiplier="2x"
        color="gray"
        isDisabled={props.disabledBets.gray}
        onCardClick={props.makeNewBet}
      />
      <BetCard
        userBet={props.userBets.red}
        bets={DUMMY_BETS.red}
        multiplier="3x"
        color="red"
        isDisabled={props.disabledBets.red}
        onCardClick={props.makeNewBet}
      />
      <BetCard
        userBet={props.userBets.blue}
        bets={DUMMY_BETS.blue}
        multiplier="5x"
        color="blue"
        isDisabled={props.disabledBets.blue}
        onCardClick={props.makeNewBet}
      />
      <BetCard
        userBet={props.userBets.yellow}
        bets={DUMMY_BETS.yellow}
        multiplier="50x"
        color="yellow"
        isDisabled={props.disabledBets.yellow}
        onCardClick={props.makeNewBet}
      />
    </div>
  );
};

export default WheelBets;
