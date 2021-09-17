import React, { useCallback, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TOGGLE_CHAT } from '../../../store/chatReducer';
import { Link } from 'react-router-dom';

import './MainNavigation.css';
import logo from '../../../assets/img/logos/logo.svg';
import chatIcon from '../../../assets/img/icons/chat.png';

import linksConfig from './links-config';

import NavLink from './NavLink';
import NavSettings from './NavSettings';
import useWindowSize from '../../../hooks/use-windowSize';
import useNavIndicator from '../../../hooks/useNavIndicator';

const MainNavigation = () => {
  const dispatch = useDispatch();
  const chatIsActive = useSelector((state) => state.chat.chatIsActive);
  const navLinksWrapperRef = useRef();

  const {
    indicatorInfo,
    linkHoverHandler,
    linkClickHandler,
    logoClickHandler,
    navMouseLeaveHandler,
  } = useNavIndicator(navLinksWrapperRef);

  const windowSize = useWindowSize();
  const isMobile = windowSize.width <= 1280;

  // hide the indicator if isMobile
  let navIndicatorStyles = {
    ...indicatorInfo,
    display: isMobile ? 'none' : 'block',
  };

  const linkClicked = useCallback(
    (event) => {
      linkClickHandler(event);

      if (windowSize.width <= 768 && chatIsActive)
        dispatch({ type: TOGGLE_CHAT });

      window.scrollTo(0, 0);
    },
    [chatIsActive, dispatch, windowSize.width, linkClickHandler]
  );

  const toggleChatHandler = () => {
    if (windowSize.width <= 768 && !chatIsActive) {
      document.body.className = 'no-scroll';
    } else if (windowSize.width <= 768 && chatIsActive) {
      document.body.className = '';
    }

    dispatch({ type: TOGGLE_CHAT });
  };

  const mobileChatToggler = isMobile && (
    <NavLink name="Chat" icon={chatIcon} isButton onClick={toggleChatHandler} />
  );

  const desktopLogo = !isMobile && (
    <div className="logo">
      <Link to="/" className="flex-center" onClick={logoClickHandler}>
        <img src={logo} alt="CSGOSpark Logo" />
      </Link>
    </div>
  );

  const navLinks = (
    <ul
      className="nav-links flex-center"
      onMouseLeave={!isMobile ? navMouseLeaveHandler : undefined}
      ref={navLinksWrapperRef}
    >
      {mobileChatToggler}
      {linksConfig.map((link, id) => (
        <NavLink
          key={id}
          onHover={!isMobile ? linkHoverHandler : undefined}
          onLinkClick={linkClicked}
          name={link.name}
          icon={link.icon}
          url={link.url}
          hasSeparator={id === 3}
          isSvg={link.isSvg}
        />
      ))}
    </ul>
  );

  return (
    <header className="header">
      {desktopLogo}
      <div className="nav-indicator" style={navIndicatorStyles} />
      <nav className="flex-center">
        {navLinks}
        <NavSettings />
      </nav>
    </header>
  );
};

export default MainNavigation;
