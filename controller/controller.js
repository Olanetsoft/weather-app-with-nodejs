const request = require('request');

exports.getHome = (req, res) => {
    const apiKey = process.env.API_KEY;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=lagos&units=metric&cnt=7&appid=${apiKey}`;

    request(url, function (err, response, body) {
        if (err) {
            console.log('error:', error);
        } else {
            let w = JSON.parse(body)
            // console.log('body:', w.main.temp - 273.15);
            console.log('body:', w);
            var today = new Date();

            var date = today.getDate();
            var month = today.toLocaleString('default', { month: 'long' });
            var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            var day = days[today.getDay()];
            res.render('index', {
                w,
                date,
                month,
                day
            });
        }
    });
};

exports.findLocation = (req, res) => {
    const apiKey = process.env.API_KEY;
    const { location } = req.body;
    if (!location) res.redirect('/');
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&cnt=7&appid=${apiKey}`;

    request(url, function (err, response, body) {
        if (err) {
            console.log('error:', error);
        } else {
            let w = JSON.parse(body)
            // console.log('body:', w.main.temp - 273.15);
            console.log('body:', w.main.temp);
            var today = new Date();

            var date = today.getDate();
            var month = today.toLocaleString('default', { month: 'long' });
            var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            var day = days[today.getDay()];
            res.render('index', {
                w,
                date,
                month,
                day
            });
        }
    });
};

exports.returnHome = (req, res) => {
    res.redirect('/');
}