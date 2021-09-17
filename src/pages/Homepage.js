import React from 'react';

import BannerSlider from '../components/BannerSlider/BannerSlider';
import GameSelector from '../components/GameSelector/GameSelector';
import { useSelector } from 'react-redux';

const Homepage = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const username = useSelector((state) => state.user.username);
  let welcomeBack = null;
  if (isLoggedIn)
    welcomeBack = (
      <>
        <p className="welcome-message">Welcome back, <span>{username}</span>!</p>
        <BannerSlider />
      </>
    );

  return (
    <>
      {welcomeBack}
      {!isLoggedIn && <BannerSlider />}
      <GameSelector />
    </>
  );
};

export default Homepage;
