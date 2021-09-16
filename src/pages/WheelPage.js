import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SET_MONEY } from '../store/userReducer';

import WheelBets from '../components/WheelBets/WheelBets';
import WheelMakeBet from '../components/WheelMakeBet/WheelMakeBet';
import WheelWidget from '../components/WheelWidget/WheelWidget';
import UserStats from '../components/UserPageControl/UserPageControl';

const disabledBetsDefault = {
  gray: false,
  red: false,
  blue: false,
  yellow: false,
};

const disabledBetsOnSpin = {
  gray: true,
  red: true,
  blue: true,
  yellow: true,
};

const userBetsDefault = {
  gray: 0,
  red: 0,
  blue: 0,
  yellow: 0,
};

const WheelPage = () => {
  const [userBets, setUserBets] = useState(userBetsDefault);
  const [bettingAttempts, setBettingAttempts] = useState(0);
  const [disabledBets, setDisabledBets] = useState(disabledBetsDefault);
  const [isSpinning, setIsSpinning] = useState(false);

  const amountInputRef = useRef();
  const dispatch = useDispatch();
  const userMoney = useSelector((state) => state.user.money);

  useEffect(() => window.scrollTo(0, 0), []);

  const newBetMadeHandler = (color) => {
    const betAmount = parseInt(amountInputRef.current.value);
    // Don't allow more than 4 attemps of betting
    if (bettingAttempts === 4 || !betAmount || betAmount > userMoney) return;

    const newUserBets = { ...userBets };
    // Add new amount on old bet amount (0 by default)
    newUserBets[color] = userBets[color] + betAmount;
    setUserBets(newUserBets);
    setBettingAttempts(bettingAttempts + 1);

    let tempLostMoney = userMoney - betAmount;
    dispatch({ type: SET_MONEY, money: tempLostMoney });
  };

  const checkRoundBet = useCallback(
    (roundWinningColor) => {
      // Show only the winning color colum;
      const hiddenColorsMap = { ...disabledBets };
      for (let color in hiddenColorsMap) {
        if (color !== roundWinningColor) {
          hiddenColorsMap[color] = true;
        } else {
          hiddenColorsMap[color] = false;
        }
      }
      setDisabledBets(hiddenColorsMap);

      // if user made no bet (em)
      if (Object.values(userBets).every((color) => !color)) return;

      for (let betColor in userBets) {
        if (betColor === roundWinningColor && userBets[betColor]) {
          const bettedSum = userBets[betColor];

          let profit;
          switch (betColor) {
            case 'gray':
              profit = bettedSum * 2;
              break;
            case 'red':
              profit = bettedSum * 3;
              break;
            case 'blue':
              profit = bettedSum * 5;
              break;
            case 'yellow':
              profit = bettedSum * 50;
              break;
            default:
              break;
          }

          // tempMoney for incresing money animation in WalletWidget
          let tempMoney = userMoney;
          let newMoney = userMoney + profit;

          const interval = setInterval(() => {
            tempMoney += Math.floor(profit / 50);
            // money for animation > actual newMoney
            if (tempMoney > newMoney) {
              tempMoney = newMoney;
              dispatch({ type: SET_MONEY, money: tempMoney });
              clearInterval(interval);
            }
            dispatch({ type: SET_MONEY, money: tempMoney });
          }, 20);

          const newUserBets = { ...userBets };
          for (let color in newUserBets) newUserBets[color] = 0;
          newUserBets[betColor] = profit;
          setUserBets(newUserBets);

          dispatch({ type: SET_MONEY, money: newMoney });
        }
      }
    },
    [disabledBets, userBets, dispatch, userMoney]
  );

  const enableAllBets = useCallback(() => {
    setDisabledBets(disabledBetsDefault);
    setUserBets(userBetsDefault);
    setBettingAttempts(0);
  }, []);

  const disableAllBets = useCallback(() => {
    setDisabledBets(disabledBetsOnSpin);

    amountInputRef.current.blur();
  }, []);

  return (
    <>
      <UserStats />
      <WheelWidget
        disableAllBets={disableAllBets}
        onRoundEnd={checkRoundBet}
        enableAllBets={enableAllBets}
        onSpin={setIsSpinning}
      />
      <WheelMakeBet ref={amountInputRef} isSpinning={isSpinning} />
      <WheelBets
        disabledBets={disabledBets}
        userBets={userBets}
        makeNewBet={newBetMadeHandler}
      />
    </>
  );
};

export default WheelPage;
