import firebase from 'firebase/app';
import 'firebase/database';

const removeMessage = (e) => {
  const messageTarget = e.target.id;
  console.error(messageTarget);
  const database = firebase.database();
  database.ref(`messages/${messageTarget}`).remove();
};

export default { removeMessage };
