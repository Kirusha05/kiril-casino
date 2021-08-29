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

const timerStartingTime = 5000; // milliseconds
const timerOffset = 10; // milliseconds
const spinDuration = 7000; // milliseconds
const newRoundDelay = 500;

const populateHistoryWithFakeResults = () => {
  const history = [];
  for (let i = 0; i < 100; i++) {
    history.push({ color: getRandomColor() });
  }
  return history;
};

const populatedHistory = populateHistoryWithFakeResults();

const maxHistoryResults = 100;

const WheelWidget = () => {
  const [wheelNum, setWheelNum] = useState(0);
  const [time, setTime] = useState(timerStartingTime);
  const [indicatorColor, setIndicatorColor] = useState(
    getColorHexFromNum(wheelNum)
  );
  const [gameHistory, setGameHistory] = useState(populatedHistory);

  // useEffect only after mounting
  useEffect(() => {
    // interval to set the countdown
    const interval = setInterval(() => {
      setTime((prevTime) => {
        return prevTime - timerOffset > 0 ? prevTime - timerOffset : 0;
      });
    }, timerOffset);

    return () => clearInterval(interval);
  }, []);

  // useEffect depending on timer
  useEffect(() => {
    if (time !== 0) return;
    // The timer is 0, so it's time to spin the wheel :)

    // get a random num, will be replaced with server generated one
    const randomNum = Math.floor(Math.random() * 54);
    const newResult = {
      num: randomNum,
      color: getColorNameFromNum(randomNum),
    };
    setWheelNum(randomNum);

    // after the complete spin, reset the countdown and set the indicator color
    const timeout = setTimeout(() => {
      setTime(timerStartingTime);
      setIndicatorColor(getColorHexFromNum(randomNum));

      setGameHistory((prevHistory) => {
        if (prevHistory.length < maxHistoryResults) {
          return [newResult, ...prevHistory];
        } else {
          return [newResult, ...prevHistory].slice(0, maxHistoryResults);
        }
      });
    }, spinDuration + newRoundDelay);

    return () => clearTimeout(timeout);
  }, [time]);

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
