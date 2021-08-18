import React from 'react';

import MainNavigation from './Navigation/MainNavigation';
import Chat from '../Chat/Chat';
import Footer from './Footer/Footer';

import './Layout.css';
import useWindowSize from '../../hooks/use-windowSize';
import { useSelector } from 'react-redux';

const Layout = (props) => {
  const chatIsActive = useSelector((state) => state.chat.chatIsActive);
  const windowSize = useWindowSize();
  const mainWaveOffset = windowSize.width * 0.2;

  return (
    <>
      <MainNavigation />
      <Chat />
      <div className={`main-section ${chatIsActive ? 'chat-push' : ''}`}>
        <main style={{ paddingBottom: `${mainWaveOffset}px` }}>
          {props.children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
