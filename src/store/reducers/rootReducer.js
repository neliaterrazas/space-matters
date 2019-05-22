import authReducer from './authReducer'
import eventReducer from './eventReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: authReducer,
  nextEvent: eventReducer
});

export default rootReducer;
