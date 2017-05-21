const messages = require('express').Router();
const messagesQueries =  require('../../queries/messages');


messages.get ('/', messagesQueries.getMessages);
messages.get ('/:id', messagesQueries.getMessage);
messages.post('/:message', messagesQueries.postMessage);


module.exports = messages;