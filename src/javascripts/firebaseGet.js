import firebase from 'firebase/app';
import 'firebase/database';
import send from './components/chatBox/chatBox';

const gotDataMessages = (data) => {
  const messagesArray = [];
  const messageList = data.val();
  if (messageList === null) {
    send.sendData(messagesArray);
  } else {
    const keys = Object.keys(messageList);
    for (let i = 0; i < keys.length; i += 1) {
      const k = keys[i];
      const messageObject = {
        // messageId: k,
        // user: messageList[k].user,
        // messageContent: messageList[k].messageContent,
        messageId: k,
        userId: messageList[k].userId,
        name: messageList[k].name,
        timeStamp: messageList[k].timeStamp,
        messageContent: messageList[k].messageContent,
      };
      messagesArray.push(messageObject);
    }
    send.sendData(messagesArray);
  }
};

const errDataMessages = (err) => {
  console.error(err);
};

// const firebaseGetMessages = () => {
//   const database = firebase.database();
//   const ref = database.ref('messages');
//   ref.on('value', gotDataMessages, errDataMessages);
// };

const firebaseGetMessages = (id) => {
  const database = firebase.database();
  const ref = database.ref(`conversations/${id}`);
  ref.on('value', gotDataMessages, errDataMessages);
};

const getMessageId = (e) => {
  const conversationId = e.target.id;
  firebaseGetMessages(conversationId);
  send.getConversationId(conversationId);
};

export default { firebaseGetMessages, getMessageId };
