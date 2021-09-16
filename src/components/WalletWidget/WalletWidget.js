import React from 'react';
import { useSelector } from 'react-redux';

import cashYellowIcon from '../../assets/img/games-related/cash-icon/cash-icon-yellow.svg';
import './WalletWidget.css';

const WalletWidget = () => {
  const money = useSelector((state) => state.user.money);

  return (
    <div className="wallet-widget flex-center">
      <div className="wallet-widget__balance flex-center">
        <img src={cashYellowIcon} alt="Money Icon" draggable="false" />
        <span>{money.toFixed(0)}</span>
      </div>
      <button>Wallet</button>
    </div>
  );
};

export default WalletWidget;
