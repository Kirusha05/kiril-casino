import React from 'react';
import { useSelector } from 'react-redux';

import playerIcon from '../../assets/img/icons/user.svg';
import cashIcon from '../../assets/img/games-related/cash-icon/cash-icon-white.svg';
import './BetCardTitle.css';

const BetCardTitle = (props) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <div
      className={`bet-card__title${props.isDisabled ? ' disabled' : ''}`}
      onClick={!props.isDisabled && isLoggedIn ? props.onCardTitleClick : undefined}
    >
      <div className="hover-dark"></div>
      <div className="betting-players flex-center">
        <img src={playerIcon} alt="Players Icon" draggable="false" />
        <span>{props.playersNum}</span>
      </div>
      <div className="betting-multiplier flex-center">{props.multiplier}</div>
      <div className="betting-sum flex-center">
        <img src={cashIcon} alt="Cash Icon" draggable="false" />
        <span>{props.bettingSum}</span>
      </div>
    </div>
  );
};

export default BetCardTitle;
