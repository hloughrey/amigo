const credentials = require('../../lib/credentials').pgres;
const responses = require('../../lib/responses.js');

const promise = require('bluebird');

let options = {
  promiseLib: promise
};

let pgp = require('pg-promise')(options);

let connectionString = `postgres://${credentials.username}:${credentials.password}@${credentials.host}:${credentials.port}/${credentials.database}`;
let db = pgp(connectionString);

const getMessages = (req, res, next) => {
  db.any('SELECT * FROM amigo.contacts;')
    .then ((data) => {
      if (data) {
        res.status(200).json({
          response: responses.RESPONSES_STATUS.SUCCESS,
          message: responses.RESPONSES_MESSAGES.RESOURCE_FOUND, 
          data: data
        });
      } else {
        res.status(400).json({
          response: responses.RESPONSES_STATUS.SUCCESS,
          message: responses.RESPONSES_MESSAGES.RESOURCE_NOT_FOUND
        });
      };
    })
    .catch ((err) => {
      res.status(404).json({
        status: responses.RESPONSES_STATUS.ERROR,
        message: responses.RESPONSES_MESSAGES.RESOURCE_NOT_FOUND,
        data: {
          name: err.name,
          message: err.message
        }
      });  
    });
};

const getMessage = (req, res, next) => {
  db.one('SELECT * FROM amigo.contacts WHERE id = ${id};',
    {
      id: req.params.id
    }
  )
    .then ((data) => {
      if (data) {
        res.status(200).json({
          response: responses.RESPONSES_STATUS.SUCCESS,
          message: responses.RESPONSES_MESSAGES.RESOURCE_FOUND,
          data: data
        });
      } else {
        res.status(400).json({
          response: responses.RESPONSES_STATUS.ERROR,
          message: responses.RESPONSES_MESSAGES.RESOURCE_NOT_FOUND
        });
      };
    })
    .catch((err) => {
      res.status(404).json({
        response: responses.RESPONSES_STATUS.ERROR,
        message: responses.RESPONSES_MESSAGES.RESOURCE_NOT_FOUND,
        data: {
          name: err.name,
          message: err.message
        }
      });  
    });
};

const postMessage = (req, res, next) => {
  db.one('INSERT INTO amigo.contacts (message) VALUES (${message}) RETURNING id;', 
    {
      message: req.params.message
    }
  )
    .then ((data) => {
      res.status(200).json({
        response: responses.RESPONSES_STATUS.SUCCESS,
        message: responses.RESPONSES_MESSAGES.RESOURCE_FOUND,
        data: data
      });
    })
    .catch ((err) => {
      res.status(404).json({
        response: responses.RESPONSES_STATUS.ERROR,
        message: responses.RESPONSES_MESSAGES.RESOURCE_NOT_FOUND,
        data: {
          name: err.name,
          message: err.message
        }
      })
    });
};

module.exports = {
  getMessages: getMessages,
  getMessage: getMessage,
  postMessage: postMessage
};