const express = require('express');

const parser = require('body-parser');

//const MongoClient = require('mongodb').MongoClient;
const mongodb = require('./models/connect');

const port = process.env.port || 10000;
const app = express();

// import routes
//const indexRoute = require('./routes');

// apply the routes
app.use(parser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})
app.use('/', require('./routes'));

mongodb.initializeDB((err, mongodb) => {
    if(err) {
        console.log(err);
    }
    else {
        app.listen(port, () => {
            console.log(`App is listening on ${port}`)
        });
    }
});
