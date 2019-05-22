import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


var config = {
  apiKey: "AIzaSyAURN_JxuJGb54Y1YPHYcJQRUibSRU0UxA",
  authDomain: "space-matters.firebaseapp.com",
  databaseURL: "https://space-matters.firebaseio.com",
  projectId: "space-matters",
  storageBucket: "space-matters.appspot.com",
  messagingSenderId: "1035578766163",
  appId: "1:1035578766163:web:7e372da016e68fea"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true});

export default firebase;
