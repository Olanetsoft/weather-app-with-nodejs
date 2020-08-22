const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
//Including session
var session = require('express-session');


//adding the route configuration 
const routes = require('./routes/route');

const app = express();

//setting the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//use bodyParser to grab the body sent via nodejs
app.use(bodyParser.urlencoded({ extended: false }));


//registering a middleware for server static files
app.use(express.static(path.join(__dirname, 'public')));


//Global Middleware registered
//Using morgan only in development
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}


//This section below uses the declare route to navigate to the pages whenever a request is sent
app.use(routes);

app.use(session({
    secret: 'mylongsuperfuckingsecretpleasedontcopy',
    resave: false,
    saveUninitialized: false
}));

app.use(function (req, res, next) {
    req.session.cookie.maxAge = 180 * 60 * 1000; // 3 hours
    next();
});

app.use(function (req, res, next) {
    res.locals.session = req.session.data;
    next();
});


module.exports = app;