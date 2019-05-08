import firebase from 'firebase/app';
import 'firebase/database';

const removeMessage = (id, conversation) => {
  const messageTarget = id;
  const database = firebase.database();
  database.ref(`conversations/${conversation}/${messageTarget}`).remove();
};

export default { removeMessage };
