import React from 'react';
import { Link } from 'react-router-dom';

import mainLogo from '../../../assets/img/logos/logo.svg';
import trustpilotLogo from '../../../assets/img/logos/trustpilot.svg';
import begambleawareLogo from '../../../assets/img/logos/begambleaware.svg';

import twitterLogo from '../../../assets/img/logos/twitter.svg';
import instagramLogo from '../../../assets/img/logos/instagram.svg';
import steamLogo from '../../../assets/img/logos/steam.svg';
import discordLogo from '../../../assets/img/logos/discord.svg';

import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__columns">
        <div className="footer-column">
          <img className="footer-logo" src={mainLogo} alt="CSGOSPARK Logo" draggable="false" />
          <p>
            Do velit id non nulla consequat pariatur mollit nostrud fugiat id
            ipsum. Laborum culpa laborum deserunt est consectetur ea magna et
            occaecat commodo ea do amet pariatur. Quis consectetur laboris
            tempor dolore magna. Nisi pariatur sint ex consequat sunt
            exercitation magna est duis sint duis. Mollit elit quis eiusmod qui
            exercitation est occaecat est qui nulla non reprehenderit qui.
            Pariatur do est laborum laboris ad.
          </p>
        </div>
        <div className="footer-column">
          <h3 className="footer-column__title">About</h3>
          <Link className="internal-link" to="/faq">
            FAQ
          </Link>
          <Link className="internal-link" to="/provably-fair">
            Provably Fair
          </Link>
          <Link className="internal-link" to="/privacy-policy">
            Privacy Policy
          </Link>
          <Link className="internal-link" to="/terms-of-service">
            Terms of Service
          </Link>
          <img
            className="certified"
            src={trustpilotLogo}
            alt="Trustpilot Logo"
            draggable="false"
          />
        </div>
        <div className="footer-column">
          <h3 className="footer-column__title">Our Games</h3>
          <Link className="internal-link" to="/wheel">
            Wheel Of Fortune
          </Link>
          <Link className="internal-link" to="/crash">
            Crash
          </Link>
          <Link className="internal-link" to="/dice">
            Dice
          </Link>
          <Link className="internal-link" to="/coinflip">
            Coinflip
          </Link>
          <img
            className="certified"
            src={begambleawareLogo}
            alt="BeGambleAware Logo"
            draggable="false"
          />
        </div>
        <div className="footer-column">
          <h3 className="footer-column__title">Community</h3>
          <div className="footer-social">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="footer-social__wrapper flex-center"
            >
              <img src={twitterLogo} alt="Twitter" draggable="false" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="footer-social__wrapper flex-center"
            >
              <img src={instagramLogo} alt="Instagram" draggable="false" />
            </a>
            <a
              href="https://steamcommunity.com/id/gxmee"
              target="_blank"
              rel="noreferrer"
              className="footer-social__wrapper flex-center"
            >
              <img src={steamLogo} alt="Steam" draggable="false" />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noreferrer"
              className="footer-social__wrapper flex-center"
            >
              <img src={discordLogo} alt="Discord" draggable="false" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>
          Copyright © 2021{' '}
          <span className="text-logo emphasize">CSGOSPARK</span>.{' '}
        </p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
