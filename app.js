const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const { isRegExp } = require('util');
const app = express()
const UserRouters = require('./routes/user')
const PORT = 3000;
const mongoose = require('mongoose')
// express middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// express middleware to parse the url-encoded requests
app.use(bodyParser.urlencoded({ extended: false }));

// setting templating engine as ejs
app.set('view engine', 'ejs');

app.use(UserRouters);


mongoose.connect(
    process.env.MONGODB_URL,
    { useNewUrlParser: true }
)
    .then(result => {
        app.listen(process.env.PORT);
        console.log('app is running on port ' + process.env.PORT)
    })
    .catch(err => {
        console.log(err);
    })