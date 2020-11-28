import firebase from "firebase/app";
import "firebase/firestore";

const devFirebaseConfig = {
  apiKey: "***REMOVED***",
  authDomain: "rct-portal---dev.firebaseapp.com",
  databaseURL: "https://rct-portal---dev.firebaseio.com",
  projectId: "rct-portal---dev",
  storageBucket: "rct-portal---dev.appspot.com",
  messagingSenderId: "***REMOVED***",
  appId: "***REMOVED***",
  measurementId: "***REMOVED***",
};

const firebaseConfig = {
  apiKey: "AIzaSyAgTAwlW32IZPwp4exb6TeqiHxUsfztbbs",
  authDomain: "rct-portal.firebaseapp.com",
  databaseURL: "https://rct-portal.firebaseio.com",
  projectId: "rct-portal",
  storageBucket: "rct-portal.appspot.com",
  messagingSenderId: "74097284562",
  appId: "1:74097284562:web:60a747d7dd57fc0fbbe40b",
  measurementId: "G-WS638DVSGE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };
