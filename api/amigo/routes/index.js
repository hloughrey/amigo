const routes = require('express').Router();
const messages = require('./messages');

routes.get('/', (req, res) => {
    res.status(200).json({
        message: 'Connected to API'
    });
});

// Route any request for messages
routes.use('/messages', messages);

module.exports = routes;