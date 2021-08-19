const initialState = {
  chatIsActive: window.innerWidth > 1280,
  messages: [
    {
      text: 'Scrollbarul este ascuns, dar poti da scroll',
      author: 'Gxme',
      level: 1,
      levelRange: 1,
      time: '15:32',
      id: 1,
    },
    {
      text: 'Mesajele au timestamp adevarat, ia zi-mi daca corespunde ora :))',
      author: 'Redea',
      level: 99,
      levelRange: 90,
      time: '07:34',
      id: 2,
    },
    {
      text: 'Sunt arătate doar cele mai recente *10* mesaje, dar se poate de schimbat',
      author: 'System',
      level: 99,
      levelRange: 90,
      time: '23:59',
      id: 3,
    },
  ],
};

export const TOGGLE_CHAT = 'TOGGLE_CHAT';
export const ADD_MESSAGE = 'ADD_MESSAGE';

const maxMessagesToShow = 20;

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CHAT:
      return { ...state, chatIsActive: !state.chatIsActive };
    case ADD_MESSAGE:
      const dateTime = new Date(action.timestamp);
      const hours = dateTime.getHours() < 10 ? `0${dateTime.getHours()}` : dateTime.getHours();
      const minutes = dateTime.getMinutes() < 10 ? `0${dateTime.getMinutes()}` : dateTime.getMinutes();
      const messageTime = `${hours}:${minutes}`;

      const randomLvl = Math.ceil(Math.random() * 99);
      const randomLvlRange = Math.floor(randomLvl / 10) * 10;

      const newMessage = {
        text: action.text,
        author: 'Kirusha',
        level: randomLvl,
        levelRange: randomLvlRange,
        time: messageTime,
        id: state.messages[state.messages.length - 1].id + 1,
      };

      let newMessagesArray = [...state.messages, newMessage];
      let messagesCount = newMessagesArray.length;
      if (messagesCount > maxMessagesToShow) {
        // newMessagesArray = newMessagesArray.slice(messagesCount - maxMessagesToShow);
        newMessagesArray.shift();
      }

      return { ...state, messages: newMessagesArray };
    default:
      return state;
  }
};

export default chatReducer;
