import '../styles/main.scss';
import 'bootstrap';

import eventListeners from './components/eventListeners';
import initialize from './firebaseInitialize';
import getData from './firebaseGet';
import user from './firebaseUser';


const init = () => {
  initialize.firebaseInitialize();
  getData.firebaseGetMessages();
  user.showModal();
  eventListeners.eventListeners();
};

init();
