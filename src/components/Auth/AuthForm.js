import React, { useState } from "react";

import AuthTitle from "./AuthTitle";
import Spinner from "../UI/Spinner/Spinner";
import useInput from "../../hooks/use-input";

import * as validate from "./validation";

import "./AuthForm.css";

const AuthForm = (props) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPass, setShowPass] = useState(false);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    inputChangeHandler: emailChangeHandler,
    inputTouchedHandler: emailTouchedHandler,
    reset: resetEmailInput,
  } = useInput(validate.email);

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    inputChangeHandler: passwordChangeHandler,
    inputTouchedHandler: passwordTouchedHandler,
    reset: resetPasswordInput,
  } = useInput(validate.password);

  const {
    value: enteredPasswordConfirm,
    isValid: enteredPasswordConfirmIsValid,
    hasError: passwordConfirmInputHasError,
    inputChangeHandler: passwordConfirmChangeHandler,
    inputTouchedHandler: passwordConfirmTouchedHandler,
    reset: resetPasswordConfirmInput,
  } = useInput((value) => value === enteredPassword);

  // Set overall form validity
  const formIsValid =
    enteredEmailIsValid &&
    enteredPasswordIsValid &&
    enteredPasswordConfirmIsValid;

  // Reset all form inputs
  const resetForm = () => {
    resetEmailInput();
    resetPasswordInput();
    resetPasswordConfirmInput();
  };

  // Change isLogin state and reset form
  const showLogin = () => {
    setIsLogin(true);
    resetForm();
  };

  const showRegister = () => {
    setIsLogin(false);
    resetForm();
  };

  // Show passwords
  const toggleShowPass = () => {
    setShowPass((prevState) => !prevState);
  };

  // Submit Logic
  const submitFormHandler = (event) => {
    event.preventDefault();

    // If user is Registering and the form is not valid, show the input errors
    if (!formIsValid && !isLogin) {
      emailTouchedHandler();
      passwordTouchedHandler();
      passwordConfirmTouchedHandler();
      return;
    }

    // FormIsValid && isRegister or doesn't matter if the form is valid when isLogin
    props.onSubmit({ email: enteredEmail, password: enteredPassword }, isLogin);
  };

  // Props for AuthTitle
  const titleUtils = { isLogin, showLogin, showRegister };

  // Messages to show as input errors
  const errorMsg = {
    email: "Email format is not valid!",
    password:
      "At least 8 characters, one uppercase, one lowercase, one number!",
    passwordConfirm: "Passwords do not match!",
  };

  return (
    <div className="auth-form">
      <AuthTitle {...titleUtils} />
      <form onSubmit={submitFormHandler}>
        {/* Email */}
        <div className="control-group">
          <label htmlFor="email">E-Mail Address</label>
          <input
            id="email"
            type="email"
            className={emailInputHasError && !isLogin ? "error-box" : ""}
            value={enteredEmail}
            onChange={emailChangeHandler}
            required
            placeholder="username@mail.com"
          />
          {emailInputHasError && !isLogin && (
            <p className="error">{errorMsg.email}</p>
          )}
        </div>
        {/* Password */}
        <div className="control-group">
          <label htmlFor="password">Password</label>
          {!isLogin && (
            <p className={passwordInputHasError ? "error" : ""}>
              {errorMsg.password}
            </p>
          )}
          <input
            id="password"
            type={!showPass ? "password" : "text"}
            className={passwordInputHasError && !isLogin ? "error-box" : ""}
            value={enteredPassword}
            onChange={passwordChangeHandler}
            required
            placeholder="********"
          />
        </div>
        {/* Password Confirm */}
        {!isLogin && (
          <div className="control-group">
            <label htmlFor="password-confirm">Confirm Password</label>
            <input
              id="password-confirm"
              type={!showPass ? "password" : "text"}
              className={passwordConfirmInputHasError ? "error-box" : ""}
              value={enteredPasswordConfirm}
              onChange={passwordConfirmChangeHandler}
              required
              placeholder="********"
            />
            {passwordConfirmInputHasError && (
              <p className="error">{errorMsg.passwordConfirm}</p>
            )}
          </div>
        )}
        {/* Show Password */}
        <div className="show-pass flex-center">
          <input type="checkbox" id="show-password" onChange={toggleShowPass} />
          <label htmlFor="show-password">Show password</label>
        </div>
        {/* Submit Form */}
        <div className="actions">
          {!props.isLoading && (
            <button>{isLogin ? "Login" : "Create account"}</button>
          )}
          {props.isLoading && <Spinner />}
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
