const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const request = require('request');



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



app.get('/', (req, res) => {
    res.render('index');
});


app.post('/find', (req, res) => {
    const apiKey = process.env.API_KEY;
    const { location } = req.body;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&cnt=7&appid=${apiKey}`;

    request(url, function (err, response, body) {
        if (err) {
            console.log('error:', error);
        } else {
            let w = JSON.parse(body)
            // console.log('body:', w.main.temp - 273.15);
            console.log('body:', w.main.temp);
        }
    });
    res.redirect('/');
});


module.exports = app;