require('dotenv').config();
var express = require('express');
var ejsLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var session = require('express-session')
var passport = require('./config/passportConfig');
var app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(ejsLayouts);
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(function(req, res, next){
  res.locals.currentUser = req.user;
  next();
})

app.get('/', function(req, res){
  res.render('home');
});

app.use('/auth', require('./controllers/auth'));
app.use('/story', require('./controllers/story'));

app.listen(3000);
