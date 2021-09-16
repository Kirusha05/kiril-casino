import React, { useEffect, useState } from 'react';

import Wheel from './Wheel';
import WheelTimer from './WheelTimer';
import WheelHistory from './WheelHistory';
import WheelIndicator from './WheelIndicator';
import './WheelWidget.css';

import {
  getColorHexFromNum,
  getColorNameFromNum,
  getRandomColor,
} from './wheel-utils';

const timerStartingTime = 15000; // milliseconds
const timerOffset = 10; // milliseconds
const spinDuration = 7000; // milliseconds
const newRoundDelay = 500;
const showingResultsDelay = 3000;

const populateHistoryWithFakeResults = () => {
  const history = [];
  for (let i = 0; i < 100; i++) {
    history.push({ color: getRandomColor() });
  }
  return history;
};

const populatedHistory = populateHistoryWithFakeResults();

const maxHistoryResults = 100;

const WheelWidget = (props) => {
  const [wheelNum, setWheelNum] = useState(0);
  const [time, setTime] = useState(timerStartingTime);
  const [indicatorColor, setIndicatorColor] = useState(
    getColorHexFromNum(wheelNum)
  );
  const [gameHistory, setGameHistory] = useState(populatedHistory);
  const [makePause, setMakePause] = useState(false);

  const { disableAllBets, onRoundEnd, enableAllBets, onSpin } = props;

  // useEffect only after mounting
  useEffect(() => {
    // interval to set the spinning countdown/timer
    const interval = setInterval(() => {
      setTime((prevTime) => {
        return prevTime - timerOffset > 0 ? prevTime - timerOffset : 0;
      });
    }, timerOffset);

    return () => clearInterval(interval);
  }, []);

  // useEffect depending on timer
  useEffect(() => {
    // Return if wheel needs a pause to display the round results in WheelBets component;
    // if (makePause) return;
    if (time !== 0 || makePause) return;

    // The timer is 0, so it's time to spin the wheel :)
    // Hide all the bets
    disableAllBets();
    onSpin(true);
    // Get a random num, will be replaced with server generated one
    const randomNum = Math.floor(Math.random() * 54);
    const newResult = {
      num: randomNum,
      color: getColorNameFromNum(randomNum),
    };
    setWheelNum(randomNum);

    // After the complete spin, set the indicator color and the new history and set new timeout for a little pause for showing results
    const timeout = setTimeout(() => {
      setIndicatorColor(getColorHexFromNum(randomNum));
      setGameHistory((prevHistory) =>
        [newResult, ...prevHistory].slice(0, maxHistoryResults)
      );
      setMakePause(true);

      // hide the losing bet columns
      onRoundEnd(newResult.color);
      onSpin(false);

      setTimeout(() => {
        // show all the bet columns again
        enableAllBets();
        // reset the timer and makePause control variable
        setTime(timerStartingTime);
        setMakePause(false);
      }, showingResultsDelay);
    }, spinDuration + newRoundDelay);

    return () => clearTimeout(timeout);
  }, [time, onRoundEnd, enableAllBets, makePause, disableAllBets, onSpin]);

  return (
    <div className="wheel-widget">
      <Wheel num={wheelNum} spinDuration={spinDuration} />
      <WheelTimer time={time} />
      <WheelHistory gameHistory={gameHistory} />
      <WheelIndicator color={indicatorColor} />
    </div>
  );
};

export default WheelWidget;
