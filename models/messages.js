
let messageId = 1;

const messages = [
    {
      id: increamentId(),
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      id: increamentId(),
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];

  function increamentId() {
    
    return messageId++;
  }

  function getMessageById(id) {
    return messages.find((message) => message.id === id);
  }
  

  module.exports = {
    messages,
    increamentId,
    getMessageById
  };