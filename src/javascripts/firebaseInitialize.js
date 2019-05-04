import firebase from 'firebase/app';
import 'firebase/database';

// Initialize Firebase
const firebaseInitialize = () => {
  const config = {
    apiKey: 'AIzaSyDieCysvtmGQchpJwHtn0gUVsopJdosCLo',
    authDomain: 'baratheon-a378d.firebaseapp.com',
    databaseURL: 'https://baratheon-a378d.firebaseio.com',
    projectId: 'baratheon-a378d',
    storageBucket: 'baratheon-a378d.appspot.com',
    messagingSenderId: '105874210190',
  };
  firebase.initializeApp(config);
};

export default { firebaseInitialize };
