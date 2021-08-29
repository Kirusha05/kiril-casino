import React, { useEffect } from 'react';
import WheelBets from '../components/WheelBets/WheelBets';
import WheelWidget from '../components/WheelWidget/WheelWidget';

const WheelPage = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <WheelWidget />
      <WheelBets />
    </>
  );
};

export default WheelPage;
