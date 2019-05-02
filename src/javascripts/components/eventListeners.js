import $ from 'jquery';

import chatBox from './chatBox/chatBox';

window.jQuery = $;
window.$ = $;

const eventListeners = () => {
  $('#chatInput').keyup(chatBox.newMessageEvent);
};

export default { eventListeners };
