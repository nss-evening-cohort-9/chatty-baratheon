import $ from 'jquery';

const messageMouseenter = (e) => {
  e.preventDefault();
  // const messageId = $(e.target).closest('.messageContainer').attr('id');
  const messageContentContainer = $(e.target).closest('.messageContainer').find('.messageContent');
  const messageBtns = $(e.target).closest('.messageContainer').find('#messageBtns');
  if ((messageContentContainer).hasClass('msg-cont-left')) {
    $(messageContentContainer).animate({
      left: '+=25px',
    });
    $(messageBtns).animate({
      opacity: '1',
    });
  } else if ((messageContentContainer).hasClass('msg-cont-right')) {
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
  if ((messageContentContainer).hasClass('msg-cont-left')) {
    $(messageContentContainer).animate({
      left: '-25px',
    });
    $(messageBtns).animate({
      opacity: '0',
    });
  } else if ((messageContentContainer).hasClass('msg-cont-right')) {
    $(messageContentContainer).animate({
      right: '-25px',
    });
    $(messageBtns).animate({
      opacity: '0',
    });
  }
};

export default { messageMouseenter, messageMouseleave };
