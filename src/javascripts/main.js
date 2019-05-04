import '../styles/main.scss';
import 'bootstrap';

import eventListeners from './components/eventListeners';
import initialize from './firebaseInitialize';
import getData from './firebaseGet';


const init = () => {
  initialize.firebaseInitialize();
  getData.firebaseGetMessages();
  eventListeners.eventListeners();
};

init();
