import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SHOW_AUTH, LOGOUT } from '../../../store/authReducer';

import authIcon from '../../../assets/img/icons/user.svg';
// import logoutIcon from '../../../assets/img/icons/logout.png';
// import flag from '../../../assets/img/flags/gb_flag.png';

import './NavSettings.css';

const NavSettings = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  // const language = (
  //   <li className="flex-center">
  //     <img src={flag} alt="English" className="nav-lang" />
  //   </li>
  // );

  const authClickHandler = () => {
    !isLoggedIn ? dispatch({ type: SHOW_AUTH }) : dispatch({ type: LOGOUT });
  };

  return (
    <ul className="nav-settings flex-center">
      <li className="flex-center">
        <button onClick={authClickHandler} className="nav-auth flex-center">
          <img src={authIcon} alt="Authorization button" />
          {!isLoggedIn ? 'Sign In' : 'Logout'}
        </button>
      </li>
    </ul>
  );
};

export default NavSettings;
