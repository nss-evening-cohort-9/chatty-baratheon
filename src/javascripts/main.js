import '../styles/main.scss';
import 'bootstrap';
import chatBox from './components/chatBox';


const init = () => {
  chatBox.initializeMessages();
};

init();
