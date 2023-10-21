var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/user');

const Driver = require('./model/Driver');
const Bus = require('./model/Bus');
const Station = require('./model/Station');
const User = require('./model/User');
const School = require('./model/School');




//link with mongo databse
const mongoose = require('mongoose')

var app = express();

// Connect to your MongoDB database
mongoose.connect('mongodb://127.0.0.1:27017/busify_db')
  .then(async () => {
    // Create collections based on your Mongoose models
    await Driver.createCollection();
    await Bus.createCollection();
    await Station.createCollection();
    await User.createCollection();
    await School.createCollection();

    console.log('Empty collections created in MongoDB.');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });








app.listen(3001, ()=>{
  console.log('service is running')
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
