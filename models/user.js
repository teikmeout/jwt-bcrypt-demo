const db = require('../db/db');

function getPassword(req, res, next) {
  db.many(`SELECT * FROM demousers;`)
    .then(data => {
      res.data = data;
      next();
    })
    .catch(err => next(err))
}

function findPassword(req, res, next) {
  db.one(`SELECT password FROM demousers WHERE username = $/username/`, req.body)
    .then(data => {
      res.data = data;
      next();
    })
    .catch(err => next(err))
}

module.exports = {getPassword, findPassword};
