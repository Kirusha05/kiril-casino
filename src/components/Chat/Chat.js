import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_MESSAGE } from '../../store/chatReducer';

import toggleIcon from '../../assets/img/icons/toggle.png';
import closeIcon from '../../assets/img/icons/cancel.png';
import sendIcon from '../../assets/img/icons/send.png';
import socialIcons from './social-config';

import './Chat.css';
import useWindowSize from '../../hooks/use-windowSize';
import ChatMessage from './ChatMessage';

// const messages = [
//   {
//     text: 'Buna ziua clasa 5b aici. 😂',
//     author: 'Gxme',
//     level: 1,
//     levelRange: 1,
//   },
//   {
//     text: 'Deschide agenda, pune-ti singur nota 2 si adu la mine sa semnez',
//     author: 'Redea',
//     level: 99,
//     levelRange: 90,
//   },
// ];

const Chat = () => {
  const dispatch = useDispatch();
  const chatIsActive = useSelector((state) => state.chat.chatIsActive);
  const messages = useSelector((state) => state.chat.messages);

  const windowSize = useWindowSize();
  const messageInputRef = useRef();
  const messagesContainerRef = useRef();

  const sendMessageHandler = (event) => {
    event.preventDefault();
    const messageText = messageInputRef.current.value;

    if (!messageText.trim()) return;

    dispatch({
      type: ADD_MESSAGE,
      text: messageText,
      timestamp: new Date().toISOString(),
    });
    messageInputRef.current.value = '';

    // Scroll to the last message after 10ms, idk why it doesn't work without a short timeout
    setTimeout(() => {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }, 10);
  };

  const toggleChatHandler = () => {
    dispatch({ type: 'TOGGLE_CHAT' });
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
      <img src={closeIcon} alt="Close Chat" />
    </div>
  );

  const messagesList = messages.map((message) => (
    <ChatMessage
      key={message.id}
      time={message.time}
      author={message.author}
      text={message.text}
      level={message.level}
      levelRange={message.levelRange}
    />
  ));

  return (
    <div className={`chat${!chatIsActive ? ' hidden' : ''}`}>
      {/* Show to chat toggling button only on screens narrower than 1280px */}
      {closeChatMobile}
      {toggleChatButton}
      <div className="chat-social">
        {socialIcons.map((socialIcon, id) => (
          <a key={id} href={socialIcon.href} target="_blank" rel="noreferrer">
            <img src={socialIcon.icon} alt={socialIcon.href} />
          </a>
        ))}
      </div>
      <div className="chat-messages" ref={messagesContainerRef}>
        {messagesList}
      </div>
      <form className="add-message flex-center" onSubmit={sendMessageHandler}>
        <input
          type="text"
          placeholder="Chat here (English only)"
          ref={messageInputRef}
        />
        <button>
          <img src={sendIcon} alt="Send" />
        </button>
      </form>
    </div>
  );
};

export default Chat;
