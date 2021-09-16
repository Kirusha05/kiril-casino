import React from 'react';

import useWindowSize from '../../hooks/use-windowSize';
import WalletWidget from '../WalletWidget/WalletWidget';
import UserMenu from '../UserMenu/UserMenu';

import './UserPageControl.css';

const UserStats = () => {
  const windowSize = useWindowSize();

  return windowSize.width <= 1280 ? (
    <div className="user-page-control flex-center">
      <WalletWidget />
      <UserMenu />
    </div>
  ) : null;
};

export default UserStats;
