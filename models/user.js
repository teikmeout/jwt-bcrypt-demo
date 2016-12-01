const db = require('../db/db');
// since we are using the token as a response we require it here
const jwt = require('jsonwebtoken');
const bcrypt      = require('bcryptjs');

const SALTROUNDS = 10;

function getPassword(req, res, next) {
  db.many(`SELECT * FROM demousers;`)
    .then(data => {
      res.data = data;
      next();
    })
    .catch(err => next(err))
}

function findPassword(req, res, next) {
  console.log('the body --> ', req.body);
  db.one(`SELECT * FROM demousers WHERE username = $/username/`, req.body)
    .then(data => {
      console.log('data --> ', data);
      // this is where we compare that the password that's being sent is the same as the password inside DB
      if (bcrypt.compareSync(req.body.password, data.password)) {
        console.log('matched!');
        // so password has matched the one we have, let's put our secret there
        const myToken = jwt.sign({username: req.body.username}, process.env.SECRET)
        // send a status 200 and make myToken a json object
        res.status(200).json(myToken);
      } else console.log('no match');
      next();
      // closing the DB connection
      db.close();
    }) // end of .then
    .catch(err => next(err))
}

function createUser(req, res, next) {
  console.log('body inside createUser -->', req.body);
  // inserting values to DB, using bcrypt to run as many times as saltrounds is and save the encrypted password to DB
  db.none(`INSERT INTO demousers (username, password) VALUES ($1, $2);`, [req.body.username, bcrypt.hashSync(req.body.password, SALTROUNDS)])
    .then(() => {
      next();
      db.close();
    }) // end of .then
    .catch(error => next(error));
}

module.exports = {getPassword, findPassword, createUser};
