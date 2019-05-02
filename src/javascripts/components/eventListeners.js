import $ from 'jquery';

import chatBox from './chatBox/chatBox';

window.jQuery = $;
window.$ = $;

const eventListeners = () => {
  $('#chatInput').keyup(chatBox.newMessageEvent);
  $('#clearChat').click(chatBox.clearMessages);
};

export default { eventListeners };
