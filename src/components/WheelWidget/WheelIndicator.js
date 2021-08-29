import React from "react";

import "./WheelIndicator.css";

const WheelIndicator = (props) => {
  return (
    <svg
      id="svg"
      className="indicator"
      xmlns="http://www.w3.org/2000/svg"
      width="400"
      height="400"
      viewBox="0, 0, 400,400"
    >
      <g id="svgg">
        <path
          style={{ transition: "fill 0.2s ease" }}
          id="path0"
          d="M38.975 2.257 C 35.426 5.233,34.063 8.467,34.570 12.708 C 34.898 15.459,185.705 386.529,189.316 393.471 C 193.864 402.217,206.136 402.217,210.684 393.471 C 215.593 384.035,365.113 15.453,365.389 12.109 C 365.996 4.761,360.771 -0.312,353.125 0.203 C 348.971 0.483,346.372 2.029,274.886 46.731 C 234.217 72.162,200.519 92.969,200.000 92.969 C 199.481 92.969,165.783 72.159,125.114 46.724 C 41.198 -5.758,45.738 -3.414,38.975 2.257 "
          stroke="none"
          fill={props.color || "transparent"}
          fillRule="evenodd"
        ></path>
      </g>
    </svg>
  );
};

export default React.memo(WheelIndicator);
