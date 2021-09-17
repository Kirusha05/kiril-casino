import React from 'react';
import { NavLink as Link } from 'react-router-dom';

import './NavLink.css';

const NavLink = (props) => {
  const {
    name,
    icon,
    url,
    onHover,
    hasSeparator,
    isButton,
    onLinkClick,
    onClick,
    isSvg,
  } = props;
  return (
    <>
      <li
        className={`nav-link flex-center ${hasSeparator ? 'separate' : ''}`}
        onMouseEnter={onHover}
      >
        {!isButton ? (
          <Link to={url} className="general-icon flex-center" onClick={onLinkClick}>
            <img src={icon} alt={name} className={isSvg ? 'svg-icon' : ''} />
            {name}
          </Link>
        ) : (
          <button onClick={onClick} className="general-icon">
            <img src={icon} alt={name} />
          </button>
        )}
      </li>
      {hasSeparator && <li className="nav-separator" />}
    </>
  );
};

export default React.memo(NavLink);
