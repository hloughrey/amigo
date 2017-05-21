const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = 3000;

const routes = require('./routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Create Routes
app.use('/', routes);

if (app.get('env') === 'development') {
    app.use((err, req, res, next) => {
        res.status(500).json({
            message: err.message,
            error: err
        });
    });
};

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});

module.exports = app;