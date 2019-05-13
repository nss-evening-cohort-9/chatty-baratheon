import firebase from 'firebase/app';
import 'firebase/database';
import moment from 'moment';

const editMessage = (id, conversation, messageContent) => {
  const database = firebase.database();
  database.ref(`conversations/${conversation}/${id}/messageContent`).set(messageContent);
  database.ref(`conversations/${conversation}/${id}/timeStamp`).set(moment().format('MMMM D, YYYY h:mm A'));
};

export default { editMessage };
