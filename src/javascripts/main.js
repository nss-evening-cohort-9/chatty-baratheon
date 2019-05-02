import '../styles/main.scss';
import 'bootstrap';

import chatBox from './components/chatBox/chatBox';
import eventListeners from './components/eventListeners';


const init = () => {
  chatBox.initializeMessages();
  eventListeners.eventListeners();
};

init();
