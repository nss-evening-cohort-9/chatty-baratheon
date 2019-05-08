import $ from 'jquery';
import moment from 'moment';
import util from '../../helpers/util';
import putData from '../../firebasePut';
import removeData from '../../firebaseRemove';
import editData from '../../firebaseEdit';

import './chatBox.scss';

let messages = [];
let activeUser = '';
let currentConversationId = '';

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
      // domString += `<p class="messageDate">${message.timeStamp}</p>`;
      domString += '<div class="d-flex flex-row messageRow">';
      domString += '<div id="messageBtns" class="d-flex flex-row">';
      domString += '<button class="deleteBtn fas fa-times" data-dismiss="alert" type="button" aria-label="Delete Message"></button>';
      domString += '<button class="editBtn fas fa-pencil-alt" type="button" aria-label="Edit Message"></button>';
      domString += '<button class="saveBtn fas fa-save" style="display: none;" aria-label="Save Message"></button>';
      domString += '</div>';
      domString += `<p class="messageContent messageBubbleIn msg-cont-left">${message.messageContent}</p>`;
      domString += '</div>';
      domString += '</div>';
    } else {
      domString += `<div id="${message.messageId}" class="messageContainer d-flex flex-column align-items-end text-right ml-2">`;
      domString += `<p class="messageDate">${message.timeStamp}</p>`;
      domString += '<div class="d-flex flex-row messageRow">';
      domString += `<p class="messageContent messageBubbleOut msg-cont-right">${message.messageContent}</p>`;
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
    name: activeUser,
    timeStamp: moment().format('MMMM D, YYYY h:mm A'),
    messageContent: String(messageToPrint),
  };
  putData.putData(newMessage, currentConversationId);
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

const getConversationId = (currentConversation) => {
  currentConversationId = currentConversation;
};

const getActiveUser = (user) => {
  activeUser = user;
};

const editMessage = (e) => {
  e.preventDefault();
  util.handleEditBtn(e);
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
  editData.editMessage(messageId, messageContents);
  util.handleSaveBtn(e);
};

const deleteMessage = (e) => {
  e.preventDefault();
  const messageId = $(e.target).closest('.messageContainer').attr('id');
  removeData.removeMessage(messageId);
};

const channelBuilder = (channelArray) => {
  let domString = '<a class="dropdown-item buttons channelButtons" href="#" id="Bot">ChatBot</a>';
  domString += '<a class="dropdown-item buttons channelButtons" href="#" id="G100">Group</a>';
  channelArray.forEach((channel) => {
    domString += `<a class="dropdown-item buttons channelButtons" href="#" id="${channel.conversationId}">${channel.Recipient}</a>`;
  });
  util.printToDom('channelMenu', domString);
};

export default {
  newMessageEvent,
  clearMessages,
  editMessage,
  saveMessage,
  deleteMessage,
  sendData,
  channelBuilder,
  getConversationId,
  getActiveUser,
};
