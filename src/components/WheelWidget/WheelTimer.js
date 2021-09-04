import React from "react";

import timerIcon from "../../assets/img/games-related/timer-icon.svg";
import "./WheelTimer.css";

const WheelTimer = (props) => {
  const { time } = props;
  const formattedTime = (time / 1000).toFixed(1);

  return (
    <div className="wheel-timer-wrapper">
      <p>Game starts in</p>
      <div className="wheel-timer">
        <img src={timerIcon} alt="Timer Icon" draggable="false" />
        <span>{formattedTime}</span>
      </div>
    </div>
  );
};

export default WheelTimer;
