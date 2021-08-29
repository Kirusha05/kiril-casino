import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import ChatMessage from './ChatMessage';
import './ChatMessages.css';

const MessagesList = () => {
  const messages = useSelector((state) => state.chat.messages);
  const messagesContainerRef = useRef(); // used to scroll to last message

  useEffect(() => {
    // Scroll to the last message on every newly added message
    messagesContainerRef.current.scrollTop =
      messagesContainerRef.current.scrollHeight;
  });

  return (
    <div className="chat-messages" ref={messagesContainerRef}>
      {messages.map((message) => (
        <ChatMessage
          key={message.id}
          timestamp={message.timestamp}
          author={message.author}
          text={message.text}
          level={message.level}
          levelRange={message.levelRange}
        />
      ))}
    </div>
  );
};

export default MessagesList;
