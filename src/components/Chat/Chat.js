import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_MESSAGE } from '../../store/chatReducer';

import toggleIcon from '../../assets/img/icons/toggle.png';
import closeIcon from '../../assets/img/icons/cancel.png';

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
    if (windowSize.width <= 768 && !chatIsActive) {
      document.body.className = 'no-scroll';
    } else if (windowSize.width <= 768 && chatIsActive) {
      document.body.className = '';
    }


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

  const closeChatMobile = windowSize.width <= 1280 && (
    <div className="chat-close" onClick={toggleChatHandler}>
      <p>CLOSE</p>
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
