import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { LOGIN, HIDE_AUTH } from '../../store/authReducer';

import Modal from '../UI/Modal/Modal';
import AuthForm from './AuthForm';
import AuthFooter from './AuthFooter';

import closeIcon from '../../assets/img/icons/cancel.png';
import './Auth.css';
import useWindowSize from '../../hooks/use-windowSize';

const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showRegisterResults, setShowRegisterResults] = useState();
  const dispatch = useDispatch();
  const windowSize = useWindowSize();

  const modalSize = {
    height: windowSize.width > 568 ? 640 : 610,
    width: 400,
  };

  const hideAuthHandler = () => dispatch({ type: HIDE_AUTH });

  const loginHandler = () => {
    dispatch({ type: LOGIN });
  };

  const submitHandler = (data, isLogin) => {
    console.log(data);
    setIsLoading(true);

    if (isLogin) {
      setTimeout(() => {
        setIsLoading(false);
        loginHandler();
        hideAuthHandler();
      }, 2000);
    } else {
      setTimeout(() => {
        setIsLoading(false);
        setShowRegisterResults(true);
      }, 2000);
    }
  };

  return (
    <Modal onClose={hideAuthHandler} className="auth" {...modalSize}>
      <div className="auth-close flex-center" onClick={hideAuthHandler}>
        <img src={closeIcon} alt="Close Icon" />
      </div>
      {!showRegisterResults ? (
        <>
          <AuthForm onSubmit={submitHandler} isLoading={isLoading} />
          <AuthFooter />
        </>
      ) : (
        <p>Account created succesfully! Verify Chrome Dev Console!</p>
      )}
    </Modal>
  );
};

export default Auth;
