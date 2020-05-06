var express = require('express');
var path = require('path');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var csurf = require('csurf');

//init app
var server = express();
var csrfProtection = csurf({ cookie: true });


server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'pug');

server.use(express.static(path.join(__dirname, 'public')));

server.use(cookieParser());
server.use(session({secret: 'ssshhhhh',saveUninitialized: true,resave: true}));

//route middleware
server.get('/',csrfProtection, function(req, res){
    res.render('index',{ csrfToken: req.csrfToken() });
    res.cookies;
    res.session;    
 });
 
//start server
server.listen(7000, function(){

  console.log('Listen to port 7000........');
});
