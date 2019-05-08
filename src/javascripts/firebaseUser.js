// import firebase from 'firebase/app';
// import 'firebase/database';
import $ from 'jquery';

// const gotUser = (data) => {
//   const usersArray = [];
//   const usersList = data.val();
//   const keys = Object.keys(usersList);
//   for (let i = 0; i < keys.length; i += 1) {
//     const k = keys[i];
//     const userObject = {
//       Recipient: k,
//       conversationId: usersList[k].conversationId,
//     };
//     usersArray.push(userObject);
//   }
// };

// const errUser = (err) => {
//   console.error(err);
// };

// const firebaseGetUser = (activeUser) => {
//   const database = firebase.database();
//   const ref = database.ref(`users/${}/conversations`);
//   ref.on('value', gotUser, errUser);
// };

const showModal = () => {
  $('.modal').modal('show');
};

export default { showModal };
