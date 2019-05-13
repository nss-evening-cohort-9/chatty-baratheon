import $ from 'jquery';
import moment from 'moment';
import messagesData from '../../helpers/data/messagesData';
import util from '../../helpers/util';

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

const scrollPosition = () => {
  const container = $('#chatboxContainer')[0];
  const containerHeight = container.clientHeight;
  const contentHeight = container.scrollHeight;
  container.scrollTop = contentHeight - containerHeight;
};

const chatBoxBuilder = () => {
  const messagesToPrint = getLimitedMessageLength();
  let domString = [];
  messagesToPrint.forEach((message) => {
    if (message.userId === 'chatBot') {
      domString += `<div id="${message.messageId}" class="messageContainer d-flex flex-column align-items-start mr-2">`;
      domString += '<div class="d-flex flex-row messageRow">';
      domString += `<p class="messageContent messageBubbleIn">${message.messageContent}</p>`;
      domString += '</div>';
      domString += '</div>';
    } else {
      domString += `<div id="${message.messageId}" class="messageContainer d-flex flex-column align-items-end text-right ml-2">`;
      domString += `<p class="messageDate">${message.timeStamp}</p>`;
      domString += '<div class="d-flex flex-row messageRow">';
      domString += `<p class="messageContent messageBubbleOut messageContentRight">${message.messageContent}</p>`;
      domString += '<div id="messageBtns" class="d-flex flex-row">';
      domString += '<button class="saveBtn fas fa-save" style="display: none;" aria-label="Save Message"></button>';
      domString += '<button class="editBtn fas fa-pencil-alt" aria-label="Edit Message"></button>';
      domString += '<button class="deleteBtn fas fa-times" data-dismiss="alert" aria-label="Delete Message"></button>';
      domString += '</div>';
      domString += '</div>';
      domString += '</div>';
    }
  });
  util.printToDom('chatBox', domString);
  scrollPosition();
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
  messages.push(newMessage);
  messageIterator += 1;
  chatBoxBuilder();
};

const newMessageEvent = (e) => {
  e.preventDefault();
  if (e.keyCode === 13) {
    const messageContent = e.target.value;
    messageBuilder(messageContent);
    e.target.value = [];
  }
};

const editMessage = (e) => {
  e.preventDefault();
  util.handleEditBtn(e);
};


const updateMessageArray = (messageId, messageContents) => {
  $.each(messages, (i) => {
    if (messageId === messages[i].messageId) {
      messages[i].messageContent = messageContents;
      messages[i].timeStamp = moment().format('MMMM D, YYYY h:mm A');
    }
  });
  chatBoxBuilder();
};

const getText = (element) => {
  const firstTag = element[0].firstChild.nodeName;
  const keyTag = new RegExp(firstTag === '#text' ? '<br' : `</${firstTag}`, 'i');
  const tmp = document.createElement('p');
  tmp.innerHTML = element[0].innerHTML.replace(/<[^>]+>/g, m => (keyTag.test(m) ? '{ß®}' : '')).replace(/{ß®}$/, '');
  return tmp.innerText.replace(/{ß®}/g, '\n');
};

const saveMessage = (e) => {
  e.preventDefault();
  const messageId = $(e.target).closest('.messageContainer').attr('id');
  const messageContentContainer = $(e.target).closest('.messageContainer').find('.messageContent');
  const messageContents = getText(messageContentContainer);
  updateMessageArray(messageId, messageContents);
  util.handleSaveBtn(e);
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

const deleteMessage = (e) => {
  e.preventDefault();
  const messageId = $(e.target).closest('.messageContainer').attr('id');
  messages.forEach((message, index) => {
    if (message.messageId === messageId) {
      messages.splice(index, 1);
    }
  });
  chatBoxBuilder();
};

export default {
  initializeMessages, newMessageEvent, clearMessages, editMessage, saveMessage, deleteMessage,
};
