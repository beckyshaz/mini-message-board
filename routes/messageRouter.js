const express = require("express");
const messageRouter = express.Router();

const messageController = require('../controllers/messageController')

messageRouter.get("/", messageController.getMessages);

messageRouter.get('/new', messageController.newMessages);

messageRouter.post('/new', messageController.newPostedMessage);

messageRouter.get("/:messageId", messageController.getSelectedMessage)

module.exports = messageRouter