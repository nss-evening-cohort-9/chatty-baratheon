let global = [];

const clearMessages = () => {
  global = [];
  chatBoxBuilder();
};

export default { clearMessages };
