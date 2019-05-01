import chatBox from './chatBox';

const eventListeners = () => {
  $('#clearChat').on('click', chatBox.clearMessages);
};

export default { eventListeners };
