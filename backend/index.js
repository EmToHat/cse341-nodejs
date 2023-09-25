const bodyParser = require('body-parser');

const express = require('express');

const app = express();

const port = 8080;

// import routes
const professionalRoute = require('./routes/professional');

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  });

// apply the routes
app.use('/', professionalRoute);

app.listen(port, () => {
    console.log(`App is listening on ${port}`)
})