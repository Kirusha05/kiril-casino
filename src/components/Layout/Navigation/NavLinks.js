import React from 'react';

const NavLinks = () => {
  return (
    <div>
      <ul
        className="nav-links flex-center"
        onMouseLeave={!isMobile ? navMouseLeaveHandler : undefined}
      >
        {mobileChatToggler}
        {linksConfig.map((link, id) => (
          <NavLink
            key={id}
            onHover={!isMobile ? linkHoverHandler : undefined}
            onLinkClick={linkClickHandler}
            name={link.name}
            icon={link.icon}
            url={link.url}
            hasSeparator={id === 3}
          />
        ))}
      </ul>
    </div>
  );
};

export default NavLinks;
