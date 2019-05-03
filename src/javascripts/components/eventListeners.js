import $ from 'jquery';

import chatBox from './chatBox/chatBox';

window.jQuery = $;
window.$ = $;

const eventListeners = () => {
  $('#chatInput').keyup(chatBox.newMessageEvent);
};

const sizeIncrease = () => {
  $('#increaseSize').click(sizeIncrease() {
    curSize = parseInt($('#content').css('font-size')) + 2;
    if (curSize <= 32)
      $('#content').css('font-size', curSize);
  });
};

const init = () => {
  sizeIncrease();
};

init();

export default { eventListeners };
