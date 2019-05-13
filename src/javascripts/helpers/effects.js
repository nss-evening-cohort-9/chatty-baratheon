import $ from 'jquery';

const messageMouseenter = (e) => {
  e.preventDefault();
  const messageContentContainer = $(e.target).closest('.messageContainer').find('.messageContent');
  const messageBtns = $(e.target).closest('.messageContainer').find('#messageBtns');
  if ((messageContentContainer).hasClass('messageContentRight')) {
    $(messageContentContainer).animate({
      right: '+=25px',
    });
    $(messageBtns).animate({
      opacity: '1',
    });
  }
};

const messageMouseleave = (e) => {
  e.preventDefault();
  const messageContentContainer = $(e.target).closest('.messageContainer').find('.messageContent');
  const messageBtns = $(e.target).closest('.messageContainer').find('#messageBtns');
  if ((messageContentContainer).hasClass('messageContentRight')) {
    $(messageContentContainer).animate({
      right: '-25px',
    });
    $(messageBtns).animate({
      opacity: '0',
    });
  }
};

const toggleLogo = () => {
  const currentImg = $('#navImg').attr('src');
  if (currentImg === '/src/assets/baratheon-logo-light.svg') {
    $('#navImg').attr('src', '/src/assets/baratheon-logo.svg');
  } else {
    $('#navImg').attr('src', '/src/assets/baratheon-logo-light.svg');
  }
};

export default { messageMouseenter, messageMouseleave, toggleLogo };
