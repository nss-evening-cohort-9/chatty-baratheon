import firebase from 'firebase/app';
import 'firebase/database';

const putData = (data) => {
  const database = firebase.database();
  const ref = database.ref('messages');
  ref.push(data);
};

export default { putData };
