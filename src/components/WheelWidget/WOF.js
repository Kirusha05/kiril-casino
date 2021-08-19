import React, { useEffect, useState } from 'react';

import './WOF.css';

const extraDegrees = 3 * 360; // 3 full circles
let isInitial = true;

const getDegsToNumFromNeutral = (num) => {
  // num * 6.66 gets the degrees to the section, but because we rotate in clockwise, we will get the num position in the anti-clockwise, so we subtract from 360degs to get the opposite arc degrees
  const degs = 360 - num * 6.66; // 360degs / 54 wheel sections = 6.66degs per section
  return degs;
};

const WOF = (props) => {
  const { num, spinDuration } = props;

  const [wheelStyle, setWheelStyle] = useState({
    transform: `rotateZ(${getDegsToNumFromNeutral(num)}deg)`,
    transition: `none`,
  });

  console.log('WOF ' + num);
  console.log('Style:');
  console.log(wheelStyle)

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    // calculate degrees
    const degsToNum = getDegsToNumFromNeutral(num);

    const extraOffset = Math.floor(Math.random() * 2);

    // start the spinning, will be about 1000± degrees
    setWheelStyle({
      transform: `rotateZ(${(degsToNum + extraDegrees + extraOffset).toFixed(2)}deg)`,
      transition: `${spinDuration}ms ease`,
    });

    // set the wheel rotation point to the same num after 100ms, but without the extra spin, so during the next spins the wheel will ALWAYS rotate clockwise, will be under 360degs
    setTimeout(() => {
      setWheelStyle({
        transition: 'none',
        transform: `rotateZ(${(degsToNum + extraOffset).toFixed(2)}deg)`,
      });
    }, spinDuration + 100);
  }, [num, spinDuration]);

  return (
    <>
      <div className="wof" style={wheelStyle}></div>
    </>
  );
};

export default React.memo(WOF);
