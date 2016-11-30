const userRouter = require('express').Router();
const {getPassword, findPassword} = require('../models/user');

userRouter.route('/')
  .get(getPassword, (req, res) => {
    res.json(res.data);
  })
  .post(findPassword, (req, res) => {
    res.json(res.data);
  })

module.exports = userRouter;
