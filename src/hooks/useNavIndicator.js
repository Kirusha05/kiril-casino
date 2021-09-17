import { useState, useEffect, useCallback } from 'react';
import useWindowSize from './use-windowSize';

const useNavIndicator = (navLinksWrapper) => {
  const [indicatorInfo, setIndicatorInfo] = useState({});
  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize.width <= 1280) return;
    // Do everything to asure the font loaded and the navLink size is correct
    setTimeout(() => {
      if (!navLinksWrapper.current) return;
      let selectedLink = navLinksWrapper.current.querySelector('.active');
      // Return if the user isn't on one of the nav links pages
      if (!selectedLink) return;
      selectedLink = selectedLink.parentElement;
      const sizes = selectedLink.getBoundingClientRect();
      const size = {
        left: `${Math.ceil(sizes.left)}px`,
        width: `${Math.ceil(sizes.width)}px`,
      }
      const indicatorSize = {
        ...size,
        clickedLink: {...size}
      };
  
      console.log(indicatorSize);
  
      setIndicatorInfo(indicatorSize);
    }, 100);
  }, [navLinksWrapper, windowSize]);

  const linkHoverHandler = useCallback((event) => {
    const sizes = event.target.parentElement.getBoundingClientRect();
    const newSizes = {
      left: `${Math.ceil(sizes.left)}px`,
      width: `${Math.ceil(sizes.width)}px`,
    };
    // spread prevState, that might include the last clickedLink property
    setIndicatorInfo((prevState) => ({ ...prevState, ...newSizes }));
  }, []);

  const linkClickHandler = useCallback((event) => {
    const sizes = event.target.parentElement.getBoundingClientRect();
    const size = {
      left: `${Math.ceil(sizes.left)}px`,
      width: `${Math.ceil(sizes.width)}px`,
    };
    const newSizes = {
      ...size,
      clickedLink: { ...size },
    };
    setIndicatorInfo(newSizes);
  }, []);

  const navMouseLeaveHandler = () => {
    const sizes = {
      ...indicatorInfo,
      width: (indicatorInfo.clickedLink && indicatorInfo.clickedLink.width) || '0px',
      left: (indicatorInfo.clickedLink && indicatorInfo.clickedLink.left) || indicatorInfo.left,
    };

    setIndicatorInfo(sizes);
  };

  const logoClickHandler = () => {
    setIndicatorInfo((prevState) => ({
      width: '0px',
      left: prevState.left,
    }));
  };

  return {
    indicatorInfo,
    linkHoverHandler,
    linkClickHandler,
    logoClickHandler,
    navMouseLeaveHandler,
  };
};

export default useNavIndicator;
