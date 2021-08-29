import React, { useState } from 'react';

import './ChatChannel.css';

const CHANNELS = ['English', 'Trading Chat', 'Admin Chat'];

const ChatChannel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedChat, setSelectedChat] = useState(CHANNELS[0]);

  const toggleHandler = () => setIsOpen(!isOpen);

  // return a function to be executed, with chatName registered
  const selectHandler = (chatName) => () => {
    setSelectedChat(chatName);
    setIsOpen(false);
  };

  return (
    <div className="chat-channel flex-center">
      <div className="channel-toggle-icon">▼</div>
      <div className="chat-channel__current flex-center" onClick={toggleHandler}>Room ({selectedChat})</div>
      {isOpen && (
        <div className="chat-channel__channels">
          <ul>
            {CHANNELS.map((name, id) => (
              <li key={id} onClick={selectHandler(name)}>{name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ChatChannel;
