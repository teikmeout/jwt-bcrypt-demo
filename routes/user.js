const userRouter = require('express').Router();
const {getPassword, findPassword, createUser} = require('../models/user');

userRouter.route('/login')
  // we are using the POST route to
  // make a secure communication with user and pass
  .post(findPassword, (req, res) => {
    res.json(res.data);
  })

userRouter.route('/signup')
  .post(createUser, (req, res) => {
    res.json({message: 'signed up'});
  })

module.exports = userRouter;
