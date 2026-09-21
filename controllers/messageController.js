const messages = require('../models/messages');

const getMessages = (req, res) => {
    res.render("index", { title: "Mini Messageboard", messages: messages.messages });
}

const newMessages = (req, res) => {
    res.render("form");
}

const newPostedMessage = (req, res) => {
    const user = req.body.messageAuthor;
    const text = req.body.messageText;

    messages.messages.push({ id: messages.increamentId(), text: text, user: user, added: new Date() });

    res.redirect("/");

}

const getSelectedMessage = (req, res) => {
    console.log(req.params);
    const messageId = Number(req.params.messageId);
    const clickedMessage = messages.getMessageById(messageId);
    console.log(clickedMessage);
    res.render("selectedMessage", {id: clickedMessage.id, text: clickedMessage.text,
         user: clickedMessage.user, added: clickedMessage.added} )
    
}

module.exports = {
    getMessages,
    newMessages,
    newPostedMessage,
    getSelectedMessage
};