import React from 'react';

import BannerSlider from '../components/BannerSlider/BannerSlider';
import Banner from '../components/UI/Banner/Banner';
import GameSelector from '../components/GameSelector/GameSelector';
import { useSelector } from 'react-redux';

const Homepage = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  let welcomeBack = null;
  if (isLoggedIn) welcomeBack = <Banner title="Welcome!" subtitle="Good luck at gambling!" details="Acum bagă niște bani :)" individual />

  return (
    <>
      {welcomeBack}
      <BannerSlider />
      <GameSelector />
    </>
  );
};

export default Homepage;
