import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import './WheelMakeBet.css';

const WheelMakeBet = React.forwardRef((props, ref) => {
  const [betAmount, setBetAmount] = useState(0);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const money = useSelector(state => state.user.money);

  // Render nothing if the user is not logged in
  if (!isLoggedIn) return null;

  const amountChangeHandler = (event) =>
    setBetAmount(parseInt(event.target.value));
  // Auto-focus on hover :)
  const focusBetInput = (event) => event.target.focus();
  const blurOnClick = (event) => {
    event.target.blur();
  };

  // Bet Control Buttons' Handlers
  const setHalfAmount = () =>
    setBetAmount((prevAmount) => Math.floor(prevAmount / 2));
  const setDoubleAmount = () => setBetAmount((prevAmount) => prevAmount * 2);
  const clearAmount = () => setBetAmount(0);
  const setPlus10 = () => setBetAmount((prevAmount) => prevAmount + 10);
  const setPlus100 = () => setBetAmount((prevAmount) => prevAmount + 100);
  const setPlus1K = () => setBetAmount((prevAmount) => prevAmount + 1000);
  const setPlus10K = () => setBetAmount((prevAmount) => prevAmount + 10000);
  const setMaxAmount = () => setBetAmount(() => money);

  return (
    <div className="wheel-make-bet-wrapper">
      <div className="wheel-make-bet">
        <p>Your Bet:</p>
        <div className="wbet-main-input">
          <input
            type="number"
            value={betAmount}
            min="0"
            max="50000"
            placeholder="Bet amount..."
            onChange={amountChangeHandler}
            onMouseEnter={focusBetInput}
            onClick={blurOnClick}
            ref={ref}
          />
          <div className="wbet-main-input__controls">
            <button onClick={setHalfAmount}>1/2</button>
            <button onClick={setDoubleAmount}>2x</button>
          </div>
        </div>
        <div className="wbet-controls">
          <button onClick={clearAmount}>Clear</button>
          <button onClick={setPlus10}>+10</button>
          <button onClick={setPlus100}>+100</button>
          <button onClick={setPlus1K}>+1k</button>
          <button onClick={setPlus10K}>+10k</button>
          <button onClick={setMaxAmount}>Max</button>
        </div>
      </div>
    </div>
  );
});

export default WheelMakeBet;
