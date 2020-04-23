var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var logger = require('morgan');
var mongoose = require('mongoose');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var foodrouter=require('./routes/fooditems');
var foodcalcs=require('./routes/usercalculations');


var app = express();

// require('./db/mangoose')
require('./db/mangoose')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

//app.use('/', indexRouter);
app.use('/', foodrouter);
app.use('/', usersRouter);
app.use('/', foodcalcs);

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

// mongoose.models = {};
//     mongoose.modelSchemas = {};

// require('./uploaddata')
app.listen(3000,()=>{
  console.log("listening on localhost:"+3000)
})






