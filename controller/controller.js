const request = require('request');

exports.getHome = (req, res) => {
    res.render('index');
};

exports.findLocation = (req, res) => {
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
    res.redirect('/')
};