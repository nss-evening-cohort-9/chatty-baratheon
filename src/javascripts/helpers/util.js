import $ from 'jquery';

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const handleEditBtn = (e) => {
  const messageContainer = $(e.target.parentElement).closest('div').find('.messageContent');
  const saveBtn = $(e.target.parentElement).closest('div').find('.saveBtn');
  const editBtn = $(e.target.parentElement).closest('div').find('.editBtn');
  $(messageContainer).addClass('editable');
  $(messageContainer).attr('contenteditable', 'true');
  $(editBtn).hide();
  $(saveBtn).show();
};

const handleSaveBtn = (e) => {
  const messageContainer = $(e.target.parentElement).closest('div').find('.messageContent');
  const saveBtn = $(e.target.parentElement).closest('div').find('.saveBtn');
  const editBtn = $(e.target.parentElement).closest('div').find('.editBtn');
  $(messageContainer).removeClass('editable');
  $(messageContainer).removeAttr('contenteditable');
  $(saveBtn).hide();
  $(editBtn).show();
};

export default { printToDom, handleEditBtn, handleSaveBtn };
