const initialState = {
  chatIsActive: window.innerWidth > 1280,
  messages: [
    {
      text: 'Scrollbarul este ascuns, dar poti da scroll',
      author: 'Gxme',
      level: 1,
      levelRange: 1,
      timestamp: '15:32',
      id: 1,
    },
    {
      text: 'Mesajele au timestamp adevarat, ia zi-mi daca corespunde ora :))',
      author: 'Redea',
      level: 99,
      levelRange: 90,
      timestamp: '07:34',
      id: 2,
    },
    {
      text: 'Sunt arătate doar cele mai recente *10* mesaje, dar se poate de schimbat',
      author: 'System',
      level: 99,
      levelRange: 90,
      timestamp: '23:59',
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
      const newMessage = {
        text: action.text,
        author: action.author,
        level: action.level,
        levelRange: action.levelRange,
        timestamp: action.timestamp,
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
