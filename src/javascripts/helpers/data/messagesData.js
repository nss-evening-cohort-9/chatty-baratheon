import axios from 'axios';

const getMessagesData = () => axios.get('..db/messages.json');

export default { getMessagesData };
