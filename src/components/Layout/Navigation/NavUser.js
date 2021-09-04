import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LOGOUT } from '../../../store/authReducer';

import toggleIcon from '../../../assets/img/icons/toggle.png';
import avatarIcon from '../../../assets/img/social/user-pfp.png';
import userIcon from '../../../assets/img/icons/user.svg';
import fairnessIcon from '../../../assets/img/icons/fairness.svg';
import historyIcon from '../../../assets/img/icons/history.svg';
import logoutIcon from '../../../assets/img/icons/logout.svg';
import './NavUser.css';

const NavAvatar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const level = useSelector((state) => state.user.level);
  const levelRange = useSelector((state) => state.user.levelRange);

  const toggleHandler = () => setIsOpen(!isOpen);
  const signOut = () => dispatch({ type: LOGOUT });

  return (
    <div className="nav-user flex-center" onClick={toggleHandler}>
      <div className={`nav-avatar lvl-${levelRange}`}>
        <span className={`nav-avatar__level lvl-${levelRange}`}>{level}</span>
        <img src={avatarIcon} alt="User" draggable="false" />
      </div>
      <img
        src={toggleIcon}
        className={`toggle-user-icon ${isOpen ? 'invert' : ''}`}
        alt="Toggle Chat"
      />
      {isOpen && (
        <div className="nav-user__options">
          <ul>
            <li onClick={null}>
              <img src={userIcon} alt="Account" />
              Account
            </li>
            <li onClick={null}>
              <img src={fairnessIcon} alt="Fairness" />
              Fairness
            </li>
            <li onClick={null}>
              <img src={historyIcon} alt="History" />
              History
            </li>
            <li onClick={signOut} data-signout>
              <img src={logoutIcon} alt="Logout" />
              Sign Out
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavAvatar;
