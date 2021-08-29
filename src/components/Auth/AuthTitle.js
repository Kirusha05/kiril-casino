import React from "react";

import "./AuthTitle.css";

const AuthTitle = ({ isLogin, showLogin, showRegister }) => {
  return (
    <div className="auth-title">
      <button
        className={isLogin ? "flex-center active" : "flex-center"}
        onClick={showLogin}
      >
        Login
      </button>
      <p className="flex-center">or</p>
      <button className={!isLogin ? "active" : ""} onClick={showRegister}>
        Register
      </button>
    </div>
  );
};

export default AuthTitle;
