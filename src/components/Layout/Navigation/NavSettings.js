import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SHOW_AUTH, LOGOUT } from '../../../store/authReducer';

import WalletWidget from './WalletWidget';
import NavUser from './NavUser';
import authIcon from '../../../assets/img/icons/user.svg';
// import logoutIcon from '../../../assets/img/icons/logout.png';

import './NavSettings.css';

const NavSettings = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const loginClickHandler = () => {
    dispatch({ type: SHOW_AUTH });
  };

  const logoutClickHandler = () => {
    dispatch({ type: LOGOUT });
  };

  const notLoggedIn = (
    <button onClick={loginClickHandler} className="nav-login flex-center">
      <img src={authIcon} alt="Authorization button" draggable="false" />
      Sign In
    </button>
  );

  const loggedIn = (
    <>
      <WalletWidget />
      <NavUser />
    </>
  );

  return (
    <div className="nav-settings flex-center">
      {!isLoggedIn && notLoggedIn}
      {isLoggedIn && loggedIn}
    </div>
  );
};

export default NavSettings;
