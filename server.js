var createError = require('http-errors');
var express = require('express');
const expressLayouts = require("express-ejs-layouts");
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const methodOverride = require("method-override")
const fileUpload = require("express-fileupload");
const session = require("express-session");
const passport = require("passport");
const flash = require("connect-flash");

require("dotenv").config();
require("./config/database");
require("./config/passport");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const reviewsRouter = require("./routes/reviews")
const recipesRouter = require("./routes/recipes");
const { appendFileSync } = require('fs');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}));
app.use(flash());
app.use(fileUpload());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride("_method"));
app.use(expressLayouts);

app.set("layout", "./layouts/main")

app.use(function(req, res, next) {
  res.locals.user = req.user
  next()
})

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/", reviewsRouter)
app.use("/recipes", recipesRouter);

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
