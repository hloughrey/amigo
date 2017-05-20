const credentials = require('../../lib/credentials').pgres;

const promise = require('bluebird');

let options = {
  promiseLib: promise
};

let pgp = require('pg-promise')(options);

let connectionString = `postgres://${credentials.username}:${credentials.password}@${credentials.host}:${credentials.port}/${credentials.database}`;
let db = pgp(connectionString);

const postMessage = (req, res, next) => {
  db.one('INSERT INTO amigo.contacts (message) VALUES (${message}) RETURNING id;', 
    {
      message: req.params.message
    }
  ).then ((data) => {
    res.status(200).json({
      status: 'SUCCESS',
      message: data
    })
  }).catch ((err) => {
    res.status(400).json({
      status: 'ERROR',
      message: err
    })
  })
};

module.exports = {
  postMessage: postMessage
};