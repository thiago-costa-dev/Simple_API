const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('config');
const personRoutes = require('./routes/person');
const path = require('path');

mongoose.connect(config.get("mongooseURI"), { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.urlencoded({extended: true}));

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send(`<form action='/person/create' method='POST'><input type='text' placeholder='Type your name' name='name' /><input type='text' placeholder='Type your age' name='age' /><input type='text' placeholder='Type your gender' name='gender' /><button type='submit'>Send</button></form><br /><a href='/person'>Persons</a>`);
});

app.use('/person', personRoutes);

app.listen(8000);