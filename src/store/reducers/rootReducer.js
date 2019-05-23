import authReducer from './authReducer';
import eventReducer from './eventReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import reflectionReducer from './reflectionReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  nextEvent: eventReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  reflection: reflectionReducer
});

export default rootReducer;
