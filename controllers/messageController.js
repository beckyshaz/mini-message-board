//const messages = require('../models/populatedb');

const db = require("../models/queries");

const  getMessages = async (req, res) => {
    const messages =  await db.getMessagesAndUsernames();
    res.render("index", { title: "Mini Messageboard", messages: messages });
}

const newMessages = (req, res) => {
    res.render("form");
}

const newPostedMessage =  async (req, res) => {
    const username = req.body.messageAuthor;
    const message = req.body.messageText;

    //messages.messages.push({ id: messages.increamentId(), text: text, user: user, added: new Date() });
    const id = await db.getUserID(username);
    console.log(id);
    await db.postMessage(message, id);

    res.redirect("/");

}

const getSelectedMessage = async (req, res) => {
    console.log(req.params);
    const messageId = Number(req.params.messageId);
    const clickedMessage = await db.getMessagesBYId(messageId);
    console.log("clicked message id", clickedMessage);
    res.render("selectedMessage", {id: clickedMessage.message_id, message: clickedMessage.message,
         username: clickedMessage.username, created_at: clickedMessage.created_at} )
    
}

module.exports = {
    getMessages,
    newMessages,
    newPostedMessage,
    getSelectedMessage
};