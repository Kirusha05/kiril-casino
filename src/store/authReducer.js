const initialState = {
  authModalIsActive: false,
  isLoggedIn: true,
};

export const SHOW_AUTH = 'SHOW_AUTH';
export const HIDE_AUTH = 'HIDE_AUTH';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_AUTH:
      document.body.className = 'no-scroll';
      return { ...state, authModalIsActive: true };
    case HIDE_AUTH:
      document.body.className = '';
      return { ...state, authModalIsActive: false };
    case LOGIN:
      return { authModalIsActive: false, isLoggedIn: true };
    case LOGOUT:
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};

export default authReducer;
