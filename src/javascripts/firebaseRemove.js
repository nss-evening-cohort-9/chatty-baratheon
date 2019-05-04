import firebase from 'firebase/app';
import 'firebase/database';

const removeMessage = (id) => {
  const messageTarget = id;
  const database = firebase.database();
  database.ref(`messages/${messageTarget}`).remove();
};

export default { removeMessage };
