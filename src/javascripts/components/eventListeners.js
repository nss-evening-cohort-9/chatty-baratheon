import $ from 'jquery';
import chatBox from './chatBox/chatBox';
import effects from '../helpers/effects';

const eventListeners = () => {
  $('#chatInput').keyup(chatBox.newMessageEvent);
  $('#clearChat').click(chatBox.clearMessages);
  $('#chatBox').on('click', '.editBtn', chatBox.editMessage);
  $('#chatBox').on('click', '.saveBtn', chatBox.saveMessage);
  $('#chatBox').on('click', '.deleteBtn', chatBox.deleteMessage);
  $('#chatBox').on('mouseenter', '.messageRow', effects.messageMouseenter);
  $('#chatBox').on('mouseleave', '.messageRow', effects.messageMouseleave);
  $('#increaseSize').click(() => {
    $('#chatBox').toggleClass('largeText');
  });
  $('#toggleDark').click(() => {
    $('body').toggleClass('darkMode');
    $('#clearChat').toggleClass('btn-dark').toggleClass('btn-light');
    $('#increaseSize').toggleClass('btn-dark').toggleClass('btn-light');
    $('#toggleDark').toggleClass('btn-dark').toggleClass('btn-light');
    effects.toggleLogo();
  });
};

export default { eventListeners };
