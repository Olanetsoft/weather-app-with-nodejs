const dotenv = require('dotenv');


//Handling uncaught exceptions globally
process.on('uncaughtException', err => {
    console.log('UNCAUGHT EXCEPTION 😶', err);
});


//using the dotenv variable
dotenv.config({ path: './config.env' });

const app = require('./app');


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});


//Handling unhandled rejection globally
process.on('unhandledRejection', err => {
    console.log(err.name, err.message);
});
