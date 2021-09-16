import React, { useEffect, useState } from 'react';

import BetAmountIcon from './BetAmountIcon';
import './UserBetAmount.css';

const UserBetAmount = (props) => {
  const [tempAmount, setTempAmount] = useState(props.betAmount);
  const [isUpdating, setIsUpdating] = useState(false);
  const { betAmount } = props;

  useEffect(() => {
    if (betAmount === tempAmount || isUpdating) return;

    setIsUpdating(true);
    const betDiff = betAmount - tempAmount;
    const stepIncrement = betDiff / 50;
    let tempAmt = tempAmount;
    const interval = setInterval(() => {
      if (tempAmt + stepIncrement >= betAmount) {
        tempAmt = betAmount;
        setTempAmount(tempAmt);
        setIsUpdating(false);
        clearInterval(interval);
      } else {
        tempAmt += stepIncrement;
        setTempAmount(tempAmt);
      }
    }, 20);
  }, [betAmount, isUpdating, tempAmount]);

  return tempAmount ? (
    <div className="user-bet-amount">
      <BetAmountIcon color={props.color} />
      <span className={`multiplier-${props.color}`}>{tempAmount.toFixed(0)}</span>
    </div>
  ) : null;
};

export default UserBetAmount;
