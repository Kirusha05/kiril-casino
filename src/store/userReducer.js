const initialState = {
  username: 'Gxme',
  money: 1000,
  level: 93,
  levelRange: 90
};

export const SET_MONEY = 'SET_MONEY';

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MONEY:
      return { ...state, money: action.money }
    default:
      return state;
  }
};

export default userReducer;