import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_MESSAGE } from '../../store/chatReducer';

import toggleIcon from '../../assets/img/icons/toggle.png';
import closeIcon from '../../assets/img/icons/cancel.png';
import socialIcons from './social-config';

import './Chat.css';
import useWindowSize from '../../hooks/use-windowSize';
import ChatChannel from './ChatChannel';
import ChatMessages from './ChatMessages';
import ChatForm from './ChatForm';


const Chat = () => {
  const dispatch = useDispatch();
  const chatIsActive = useSelector((state) => state.chat.chatIsActive);
  const username = useSelector((state) => state.user.username);

  const windowSize = useWindowSize();

  const toggleChatHandler = () => {
    dispatch({ type: 'TOGGLE_CHAT' });
  };

  const sendMessageHandler = (messageInfo) => {
    const {text, timestamp, level, levelRange } = messageInfo

    dispatch({
      type: ADD_MESSAGE,
      text: text,
      author: username,
      timestamp,
      level,
      levelRange,
    });
  };

  const toggleChatButton = windowSize.width > 1280 && (
    <button className="toggle-chat flex-center" onClick={toggleChatHandler}>
      <img
        src={toggleIcon}
        className={chatIsActive ? 'invert' : ''}
        alt="Toggle Chat"
      />
    </button>
  );

  const chatSocial = (
    <div className="chat-social">
      {socialIcons.map((socialIcon, id) => (
        <a key={id} href={socialIcon.href} target="_blank" rel="noreferrer">
          <img src={socialIcon.icon} alt={socialIcon.href} />
        </a>
      ))}
    </div>
  );

  const closeChatMobile = windowSize.width <= 1280 && (
    <div className="chat-close" onClick={toggleChatHandler}>
      <img src={closeIcon} alt="Close Chat" />
    </div>
  );

  return (
    <div className={`chat${!chatIsActive ? ' hidden' : ''}`}>
      {closeChatMobile}
      {toggleChatButton}
      <ChatChannel />
      <ChatMessages />
      <ChatForm onSubmit={sendMessageHandler} />
    </div>
  );
};

export default Chat;
