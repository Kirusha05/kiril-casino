import React from 'react';

import cashGrayIcon from '../../assets/img/games-related/cash-icon/cash-icon-gray.svg';
import cashRedIcon from '../../assets/img/games-related/cash-icon/cash-icon-red.svg';
import cashBlueIcon from '../../assets/img/games-related/cash-icon/cash-icon-blue.svg';
import cashYellowIcon from '../../assets/img/games-related/cash-icon/cash-icon-yellow.svg';

const BetAmountIcon = (props) => {
  let cashColorImg;

  switch (props.color) {
    case 'gray':
      cashColorImg = cashGrayIcon;
      break
    case 'red':
      cashColorImg = cashRedIcon;
      break
    case 'blue':
      cashColorImg = cashBlueIcon;
      break
    case 'yellow':
      cashColorImg = cashYellowIcon;
      break
    default: 
      cashColorImg = cashGrayIcon;
  }

  return (
    <img src={cashColorImg} alt="Cash Icon" />
  );
};

// const BetAmountIcon = (props) => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       enableBackground="new 0 0 24 24"
//       height="24px"
//       viewBox="0 0 24 24"
//       width="24px"
//       fill="#ffffff"
//       className="cash-icon"
//     >
//       <g>
//         <path d="M19,14V6c0-1.1-0.9-2-2-2H3C1.9,4,1,4.9,1,6v8c0,1.1,0.9,2,2,2h14C18.1,16,19,15.1,19,14z M17,14H3V6h14V14z M10,7 c-1.66,0-3,1.34-3,3s1.34,3,3,3s3-1.34,3-3S11.66,7,10,7z M23,7v11c0,1.1-0.9,2-2,2H4c0-1,0-0.9,0-2h17V7C22.1,7,22,7,23,7z" />
//       </g>
//     </svg>
//   );
// };

export default BetAmountIcon;
