const initialState = {
  username: 'Gxme',
  money: 1896319,
  level: 93,
  levelRange: 90
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MONEY':
      return { ...state, money: action.money }
    default:
      return state;
  }
};

export default userReducer;