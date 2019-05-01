import messagesData from '../helpers/data/messagesData';
import util from '../helpers/util';

let messages = [];


const chatBoxBuilder = () => {
  let domString = [];
  messages.forEach((message) => {
    domString += `<div id="${message.messageId}">`;
    domString += `<p>${message.timestamp}</p>`;
    domString += '<button type="button" class="close" data-dismiss="alert" aria-label="Close">';
    domString += '<span aria-hidden="true">&times;</span>';
    domString += '</button>';
  });
  util.printToDom('#chatBox', domString);
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
export default { initializeMessages };
