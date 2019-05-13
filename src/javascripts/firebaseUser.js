import firebase from 'firebase/app';
import 'firebase/database';
import $ from 'jquery';
import chatBox from './components/chatBox/chatBox';
import pageLoad from './firebaseGet';

let activeUser;

const sendActiveUser = () => {
  chatBox.getActiveUser(activeUser);
};

const gotUser = (data) => {
  const usersArray = [];
  const usersList = data.val();
  const keys = Object.keys(usersList);
  for (let i = 0; i < keys.length; i += 1) {
    const k = keys[i];
    const userObject = {
      Recipient: k,
      conversationId: usersList[k].conversationId,
    };
    usersArray.push(userObject);
  }
  sendActiveUser();
  chatBox.channelBuilder(usersArray);
  pageLoad.getPageLoad();
};

const errUser = (err) => {
  console.error(err);
};

const firebaseGetUser = (user) => {
  const database = firebase.database();
  const ref = database.ref(`users/${user}/conversations`);
  ref.on('value', gotUser, errUser);
};


const getActiveUser = (e) => {
  activeUser = e.target.textContent;
  firebaseGetUser(activeUser);
};

const showModal = () => {
  $('.modal').modal('show');
};


export default { showModal, getActiveUser };
