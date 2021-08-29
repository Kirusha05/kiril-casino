import React from "react";

import pfp from "../../assets/img/social/user-pfp.png";
import "./ChatMessage.css";

const ChatMessage = (props) => {
  return (
    <div className="message">
      <div className="message-author">
        <div className={`message-avatar lvl-${props.levelRange}`}>
          <span className={`user-level lvl-${props.levelRange}`}>
            {props.level}
          </span>
          <img src={pfp} alt="User" />
        </div>
        <p className="author-name">{props.author}</p>
      </div>
      <div className="message-content">
        <span className="message-timestamp">{props.timestamp}</span>
        <p className="message-text">{props.text}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
