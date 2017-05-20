const messages = require('express').Router();
const messagesQueries =  require('../../queries/messages');


messages.get ('/', (req, res, next) => {
    res.status(200).json({
        message: 'YOU CALLED - i think?'
    })
});

messages.post('/:message', messagesQueries.postMessage);


module.exports = messages;