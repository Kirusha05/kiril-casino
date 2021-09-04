import React, { useEffect } from 'react';
import WheelBets from '../components/WheelBets/WheelBets';
import WheelMakeBet from '../components/WheelMakeBet/WheelMakeBet';
import WheelWidget from '../components/WheelWidget/WheelWidget';

const WheelPage = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <WheelWidget />
      <WheelMakeBet />
      <WheelBets />
    </>
  );
};

export default WheelPage;
