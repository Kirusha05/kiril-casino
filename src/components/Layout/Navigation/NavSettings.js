import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SHOW_AUTH } from '../../../store/authReducer';

import WalletWidget from '../../WalletWidget/WalletWidget';
import UserMenu from '../../UserMenu/UserMenu';
import authIcon from '../../../assets/img/icons/user.svg';

import './NavSettings.css';
import useWindowSize from '../../../hooks/use-windowSize';

const NavSettings = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const windowSize = useWindowSize();

  const loginClickHandler = () => {
    dispatch({ type: SHOW_AUTH });
  };

  const notLoggedIn = (
    <button onClick={loginClickHandler} className="nav-login flex-center">
      <img src={authIcon} alt="Authorization button" draggable="false" />
      Sign In
    </button>
  );

  const loggedIn =
    windowSize.width > 1280 ? (
      <>
        <WalletWidget />
        <UserMenu />
      </>
    ) : (
      <button onClick={loginClickHandler} className="nav-login flex-center">
        <img src={authIcon} alt="Authorization button" draggable="false" />
        Sign In
      </button>
    );

  return (
    <div className="nav-settings flex-center">
      {!isLoggedIn && notLoggedIn}
      {isLoggedIn && loggedIn}
    </div>
  );
};

export default NavSettings;
