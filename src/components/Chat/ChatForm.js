import React, { useRef } from 'react';

import gifIcon from '../../assets/img/icons/gif.svg';
import emotesIcon from '../../assets/img/icons/emotes.svg';
import sendIcon from '../../assets/img/icons/send.svg';
import './ChatForm.css';

const maxChars = 140;

const ChatForm = (props) => {
  const messageInputRef = useRef(); // used to get the message text to send

  const keyDownHandler = (event) => {
    const allowedKeys = [8, 13]; // backspace or enter
    // if over maxChars length and the key is not backspace or enter, then don't add new char
    if (
      !allowedKeys.includes(event.keyCode) &&
      event.target.value.length > maxChars
    )
      event.preventDefault();
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // get text and return if the input got no real text
    const messageText = messageInputRef.current.value;
    if (!messageText.trim()) return;

    // generate the message's timestamp
    const dateTime = new Date();
    const hours =
      dateTime.getHours() < 10
        ? `0${dateTime.getHours()}`
        : dateTime.getHours();
    const minutes =
      dateTime.getMinutes() < 10
        ? `0${dateTime.getMinutes()}`
        : dateTime.getMinutes();
    const timestamp = `${hours}:${minutes}`; // 08:47 for example

    // TO BE REPLACED WITH SERVER VARIABLES
    const randomLvl = Math.ceil(Math.random() * 99);
    const randomLvlRange = Math.floor(randomLvl / 10) * 10;

    messageInputRef.current.value = '';

    props.onSubmit({
      timestamp,
      level: randomLvl,
      levelRange: randomLvlRange,
      text: messageText
    });
  };

  return (
    <form className="chat-form flex-center" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Enter a message..."
        onKeyDown={keyDownHandler}
        onMouseOver={() => messageInputRef.current.focus()}
        ref={messageInputRef}
      />
      <button type="button">
        <img src={gifIcon} alt="Gif" className="general-icon" />
      </button>
      <button type="button">
        <img src={emotesIcon} alt="Emotes" className="general-icon" />
      </button>
      <button>
        <img src={sendIcon} alt="Send" className="general-icon" />
      </button>
    </form>
  );
};

export default ChatForm;
