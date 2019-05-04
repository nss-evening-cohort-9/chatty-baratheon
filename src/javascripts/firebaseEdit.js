import firebase from 'firebase/app';
import 'firebase/database';
import moment from 'moment';

const editMessage = (id) => {
  const messageTarget = id;
  const database = firebase.database();
  database.ref(`messages/${messageTarget}/messageContent`).set();
  database.ref(`messages/${messageTarget}/timeStamp`).set(moment().format('MMMM D, YYYY h:mm A'));
};

export default { editMessage };
