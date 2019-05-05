import $ from 'jquery';
import chatBox from './chatBox/chatBox';
import effects from '../helpers/effects';

const eventListeners = () => {
  $('#chatInput').keyup(chatBox.newMessageEvent);
  $('#clearChat').click(chatBox.clearMessages);
  $('#chatBox').on('click', '.editBtn', chatBox.editMessage);
  $('#chatBox').on('click', '.saveBtn', chatBox.saveMessage);
  $('#chatBox').on('click', '.deleteBtn', chatBox.deleteMessage);
  $('#chatBox').on('mouseenter', '.messageContainer', effects.messageMouseenter);
  $('#chatBox').on('mouseleave', '.messageContainer', effects.messageMouseleave);
  $('#increaseSize').click(function increaseSize() {
    let size = parseInt($('#chatBox').css('font-size'), 10);
    if ($(this).is(':checked')) {
      size += 4;
    } else {
      size -= 4;
      if (size <= 10) {
        size = 10;
      }
    }
    $('#chatBox').css('font-size', size);
  });
};

// const toggleDarkLight () => {
//   let body = document.getElementById("content");
//   let currentClass = body.className;
//   body.className = currentClass == "light-mode";
// };

export default { eventListeners };
