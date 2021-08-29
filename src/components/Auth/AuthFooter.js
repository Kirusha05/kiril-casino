import React from "react";
import { useDispatch } from "react-redux";
import { HIDE_AUTH } from "../../store/authReducer";

import { Link } from "react-router-dom";

import googleIcon from "../../assets/img/logos/google.png";
import steamIcon from "../../assets/img/logos/steam.png";

import "./AuthFooter.css";

const AuthFooter = () => {
  const dispatch = useDispatch();

  const hideAuthHandler = () => {
    dispatch({ type: HIDE_AUTH });
  };

  return (
    <div className="auth-footer">
      <div className="external-auth">
        <p>or</p>
        <div className="external-auth__buttons">
          <div
            className="external-auth__button"
            onClick={() =>
              (window.location =
                "https://accounts.google.com/signin/v2/identifier?service=accountsettings")
            }
          >
            <img src={googleIcon} alt="Google" />
          </div>
          <div
            className="external-auth__button"
            onClick={() =>
              (window.location =
                "https://store.steampowered.com/login/?redir=%3Fl%3Dromanian&redir_ssl=1&snr=1_4_4__global-header")
            }
          >
            <img src={steamIcon} alt="Steam" />
          </div>
        </div>
      </div>
      <p className="tos">
        By accessing this site I attest that I'm at least 18 years old and I
        have read and agreed with the{" "}
        <Link to="/terms-of-service" onClick={hideAuthHandler}>
          Terms Of Service
        </Link>
      </p>
    </div>
  );
};

export default AuthFooter;
