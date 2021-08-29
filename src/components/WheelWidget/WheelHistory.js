import React from "react";

import "./WheelHistory.css";

const WheelHistory = ({ gameHistory }) => {
  return (
    <div className="wheel-history">
      {gameHistory.map((result, id) => (
        <div key={id} className={`wheel-history__bar bar-${result.color}`} />
      ))}
    </div>
  );
};

export default WheelHistory;
