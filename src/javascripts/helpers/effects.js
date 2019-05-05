import $ from 'jquery';

const messageMouseenter = (e) => {
  e.preventDefault();
  // const messageId = $(e.target).closest('.messageContainer').attr('id');
  const messageContentContainer = $(e.target).closest('.messageContainer').find('.messageContent');
  const messageBtns = $(e.target).closest('.messageContainer').find('#messageBtns');
  if ((messageContentContainer).hasClass('messageContentLeft')) {
    $(messageContentContainer).animate({
      left: '+=25px',
    });
    $(messageBtns).animate({
      opacity: '1',
    });
  } else if ((messageContentContainer).hasClass('messageContentRight')) {
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
  // const messageId = $(e.target).closest('.messageContainer').attr('id');
  const messageContentContainer = $(e.target).closest('.messageContainer').find('.messageContent');
  const messageBtns = $(e.target).closest('.messageContainer').find('#messageBtns');
  if ((messageContentContainer).hasClass('messageContentLeft')) {
    $(messageContentContainer).animate({
      left: '-25px',
    });
    $(messageBtns).animate({
      opacity: '0',
    });
  } else if ((messageContentContainer).hasClass('messageContentRight')) {
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
  if (currentImg === 'dae0b572ec59a3e7a8b39cbcc2640a0c.svg') {
    $('#navImg').attr('src', '2b4989c61b969399fd8aab9e8e1fda85.svg');
  } else {
    $('#navImg').attr('src', 'dae0b572ec59a3e7a8b39cbcc2640a0c.svg');
  }
};

export default { messageMouseenter, messageMouseleave, toggleLogo };
