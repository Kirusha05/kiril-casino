import React from 'react';
import { NavLink as Link} from 'react-router-dom';

import './NavLink.css';

const NavLink = ({ name, icon, url, onHover, hasSeparator, isButton, onLinkClick, onClick }) => {
  return (
    <>
      <li
        className={`nav-link flex-center ${hasSeparator ? 'separate' : ''}`}
        onMouseEnter={onHover}
      >
        {!isButton ? (
          <Link to={url} className="nav-icon" onClick={onLinkClick}>
            <img src={icon} alt={name} />
            {name}
          </Link>
        ) : (
          <button onClick={onClick} className="nav-icon">
            <img src={icon} alt={name} />
          </button>
        )}
      </li>
      {hasSeparator && <li className="nav-separator" />}
    </>
  );
};

export default React.memo(NavLink);
