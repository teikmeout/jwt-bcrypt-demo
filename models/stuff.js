const db = require('../db/db');

function getSecretStuff(req, res, next) {
  db.many(`SELECT * FROM secretstuff`)
    .then((data) => {
      console.log('data inside getSecretStuff -->', data);
      res.data = data;
      next();
    })
    .catch(error => next(error))
}

module.exports = {getSecretStuff};
