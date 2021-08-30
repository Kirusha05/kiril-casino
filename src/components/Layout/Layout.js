import React from "react";

import MainNavigation from "./Navigation/MainNavigation";
import Chat from "../Chat/Chat";
import Footer from "./Footer/Footer";

import "./Layout.css";
import { useSelector } from "react-redux";

const Layout = (props) => {
  const chatIsActive = useSelector((state) => state.chat.chatIsActive);

  return (
    <>
      <MainNavigation />
      <Chat />
      <div className={`main-section ${chatIsActive ? "chat-push" : ""}`}>
        <main>
          {props.children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
