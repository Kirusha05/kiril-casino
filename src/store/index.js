import { createStore, combineReducers } from 'redux';

import chatReducer from './chatReducer';
import authReducer from './authReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  chat: chatReducer,
  auth: authReducer,
  user: userReducer
});

const store = createStore(rootReducer);

export default store;
