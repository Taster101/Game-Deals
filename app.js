var createError = require('http-errors');
var express = require('express')
var handlebars = require('handlebars');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('user');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express ();

handlebars.registerPartials(path.join(__dirname, 'views/partials'), (err) => {});

// engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded[{ extended: false}]);
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('users', usersRouter);