import $ from 'jquery';

import chatBox from './chatBox/chatBox';

window.jQuery = $;
window.$ = $;

const eventListeners = () => {
  $('#chatInput').keyup(chatBox.newMessageEvent);
  $('#clearChat').on('click', chatBox.clearMessages);
};

export default { eventListeners };
