const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');



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




module.exports = app;