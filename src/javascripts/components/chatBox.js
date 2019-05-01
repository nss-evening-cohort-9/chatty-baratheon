import './chatBox.scss';

import messagesData from '../helpers/data/messagesData';
import util from '../helpers/util';

let messages = [];

const chatBoxBuilder = () => {
  let domString = [];
  messages.forEach((message) => {
    if (message.userId === 'chatBot') {
      domString += `<div id="${message.messageId}" class="">`;
      domString += `<p>${message.timeStamp}</p>`;
      domString += '<div class="d-flex flex-row">';
      domString += '<button type="button" class="close mx-2" data-dismiss="alert" aria-label="Close">';
      domString += '<span aria-hidden="true">&times;</span>';
      domString += '</button>';
      domString += `<p>${message.messageContent}</p>`;
      domString += '</div>';
      domString += '</div>';
    } else {
      domString += `<div id="${message.messageId}" class="">`;
      domString += `<p>${message.timeStamp}</p>`;
      domString += '<div class="d-flex flex-row">';
      domString += `<p>${message.messageContent}</p>`;
      domString += '<button type="button" class="close mx-2" data-dismiss="alert" aria-label="Close">';
      domString += '<span aria-hidden="true">&times;</span>';
      domString += '</button>';
      domString += '</div>';
      domString += '</div>';
    }
  });
  util.printToDom('chatBox', domString);
};

const clearMessages = () => {
  messages = [];
  chatBoxBuilder();
};

const initializeMessages = () => {
  messagesData.getMessagesData()
    .then((resp) => {
      const messageResults = resp.data.messages;
      messages = messageResults;
      chatBoxBuilder();
    })
    .catch(err => console.error(err));
};

export default { initializeMessages, clearMessages };
