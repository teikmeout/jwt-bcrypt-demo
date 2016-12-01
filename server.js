'use strict'
require('dotenv').config({ silent: true });
const bodyParser  = require('body-parser');
const express     = require('express');
const logger      = require('morgan');
const path        = require('path');
const jwt         = require('jsonwebtoken');
// Jason web token for express
const expressJWT  = require('express-jwt');
const bcrypt      = require('bcryptjs');
const app         = express();
const PORT        = process.argv[2] || process.env.port || 3000;

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist')));
// IF YOU DONT FUCKING HAVE THIS SECRET you can't do anything except for this route of login or signup
app.use(expressJWT({secret: process.env.SECRET}).unless({path:['/user/login', '/user/signup']}));

// defining home route
const userRoute = require('./routes/user');
const apiRouter = require('./routes/api');
app.use('/user', userRoute);
app.use('/api', apiRouter);
app.listen(PORT, () => {console.log('Overpriced organic artisanal tacos on port', PORT)});
