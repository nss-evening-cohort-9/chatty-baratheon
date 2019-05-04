import moment from 'moment';

import util from '../../helpers/util';
import putData from '../../firebasePut';

import './chatBox.scss';

let messages = [];
let messageIterator = 6;

const getLimitedMessageLength = () => {
  const messagesToPrint = [...messages];
  if (messagesToPrint.length > 20) {
    return messagesToPrint.splice(-20, 20);
  }
  return messagesToPrint;
};

const chatBoxBuilder = () => {
  const messagesToPrint = getLimitedMessageLength();
  let domString = [];
  messagesToPrint.forEach((message) => {
    if (message.userId === 'chatBot') {
      domString += `<div id="${message.messageId}" class="d-flex flex-column mr-2">`;
      domString += `<p class="messageDate">${message.timeStamp}</p>`;
      domString += '<div class="d-flex flex-row">';
      domString += '<button type="button" class="close mx-2" data-dismiss="alert" aria-label="DeleteMessage">';
      domString += '<span aria-hidden="true">&times;</span>';
      domString += '</button>';
      domString += `<p class="message messageBubbleIn">${message.messageContent}</p>`;
      domString += '</div>';
      domString += '</div>';
    } else {
      domString += `<div id="${message.messageId}" class="d-flex flex-column align-items-end text-right ml-2">`;
      domString += `<p class="messageDate">${message.timeStamp}</p>`;
      domString += '<div class="d-flex flex-row">';
      domString += `<p class="message messageBubbleOut">${message.messageContent}</p>`;
      domString += '<button type="button" class="close mx-2" data-dismiss="alert" aria-label="Delete Message">';
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

const messageBuilder = (messageToPrint) => {
  const newMessage = {
    messageId: `message${messageIterator}`,
    userId: 'user1',
    name: 'me',
    timeStamp: moment().format('MMMM D, YYYY h:mm A'),
    messageContent: String(messageToPrint),
  };
  putData.putData(newMessage);
  messageIterator += 1;
};

const newMessageEvent = (e) => {
  e.preventDefault();
  if (e.keyCode === 13) {
    const messageContent = e.target.value;
    messageBuilder(messageContent);
    e.target.value = [];
  }
};

const sendData = (array) => {
  messages = [...array];
  chatBoxBuilder();
};

export default { sendData, newMessageEvent, clearMessages };
