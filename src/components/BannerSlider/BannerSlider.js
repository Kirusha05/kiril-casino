import React, { useEffect, useState } from 'react';

import './BannerSlider.css';
import Banner from '../UI/Banner/Banner';

const BANNERS_DATA = [
  {
    title: 'Welcome to CSGOSPARK!',
    subtitle: (
      <>
        Up to <span className="emphasize">$1000 BONUS</span> and{' '}
        <span className="emphasize">FREE SPINS</span> for your{' '}
        <span className="emphasize">first deposit</span>
      </>
    ),
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget felis suscipit magna volutpat dapibus at sed enim. Proin congue pellentesque lectus quis facilisis. Vivamus porttitor dapibus dapibus.',
  },
  {
    title: 'Second slide!',
    subtitle: <>Second slide</>,
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget felis suscipit magna volutpat dapibus at sed enim. Proin congue pellentesque lectus quis facilisis. Vivamus porttitor dapibus dapibus.',
  },
  {
    title: 'Third slide!',
    subtitle: <>Third slide</>,
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget felis suscipit magna volutpat dapibus at sed enim. Proin congue pellentesque lectus quis facilisis. Vivamus porttitor dapibus dapibus.',
  },
];

const BANNER_HEIGHT = 180; // px
const BANNER_WIDTH = 900; // px
const BANNER_CHANGING_SPEED = 3000; // ms

const BannerSlider = () => {
  const [showingSlideId, setShowingSlideId] = useState(0);

  useEffect(() => {
    const bannerTimer = setTimeout(() => {
      if (showingSlideId === BANNERS_DATA.length - 1) {
        setShowingSlideId(0);
      } else {
        setShowingSlideId((prevState) => prevState + 1);
      }
    }, BANNER_CHANGING_SPEED);

    return () => {
      clearTimeout(bannerTimer);
    };
  }, [showingSlideId]);

  const slideButtons = (
    <div className="slide-buttons">
      {BANNERS_DATA.map((info, id) => {
        return (
          <span
            key={id}
            className={`slide-buttons__button ${id === showingSlideId ? 'active' : ''}`}
            onClick={() => setShowingSlideId(id)}
          ></span>
        );
      })}
    </div>
  );

  return (
    <div className="banner-slider" style={{width: BANNER_WIDTH}}>
      <div className="banners">
      {BANNERS_DATA.map((banner, id) => (
        <Banner
          key={id}
          title={banner.title}
          subtitle={banner.subtitle}
          details={banner.details}
          height={BANNER_HEIGHT}
          width={BANNER_WIDTH}
          marginLeft={id === 0 && (showingSlideId === 0 ? '0' : `-${showingSlideId}00%`)}
        />
      ))}
      </div>
      {slideButtons}
    </div>
  );
};

export default BannerSlider;
