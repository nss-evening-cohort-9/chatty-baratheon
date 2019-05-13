import firebase from 'firebase/app';
import 'firebase/database';

const putData = (data, conversationId) => {
  const database = firebase.database();
  const ref = database.ref(`conversations/${conversationId}`);
  ref.push(data);
};

export default { putData };
