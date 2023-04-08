require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('./models/connection');

const corsOptions = {
    origin: 'https://front-weather-app-4cyd.vercel.app',
    optionsSuccessStatus: 200,
  };
  
  app.use(cors(corsOptions));
  

var indexRouter = require('./routes/index');
var weatherRouter = require('./routes/weather');
var userRouter = require('./routes/users')

var app = express();



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/weather', weatherRouter);
app.use('/users', userRouter)

module.exports = app;
