import React, { useEffect, useState } from 'react';

import WheelTimer from './WheelTimer';
import WOF from './WOF';
import './WheelWidget.css';
import WheelIndicator from './WheelIndicator';

const colors = {
  red: [3, 5, 7, 13, 15, 17, 23, 25, 27, 29, 31, 37, 39, 41, 47, 49, 51],
  yellow: [0],
  blue: [1, 9, 11, 19, 21, 33, 35, 43, 45, 53],
  gray: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52]
};

const colorMap = {
  red: '#cf3248',
  blue: '#3caed3',
  yellow: '#fec467',
  gray: '#5c5c5c'
};

const getColorFromNum = (num) => {
  for (let key in colors) {
    if (colors[key].includes(num)) { // if the current key includes the num in its array value
      return colorMap[key];
    }
  }
};

const timerStartingTime = 5000; // milliseconds
const timerOffset = 5; // milliseconds
const spinDuration = 7000; // milliseconds

const WheelWidget = () => {
  const [wheelNum, setWheelNum] = useState(5);
  const [time, setTime] = useState(timerStartingTime); // milliseconds
  const [indicatorColor, setIndicatorColor] = useState(getColorFromNum(5));
  
  useEffect(() => {
    console.log('WheelWidget ' + wheelNum);
  }, [wheelNum]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        return prevTime - timerOffset > 0 ? prevTime - timerOffset : 0;
      });
    }, 3);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (time !== 0) return;

    // the timer ended
    const randomNum = Math.floor(Math.random() * 54);
    setWheelNum(randomNum);

    setTimeout(() => {
      setTime(timerStartingTime);
      setIndicatorColor(getColorFromNum(randomNum));
    }, spinDuration + 1000);
  }, [time]);

  return (
    <div className="wheel-widget">
      <WOF num={wheelNum} spinDuration={spinDuration} />
      <WheelTimer time={time} />
      <WheelIndicator color={indicatorColor} />
    </div>
  );
};

export default WheelWidget;
