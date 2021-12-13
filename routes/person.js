const express = require('express');
const routes = express.Router();
const Person = require('../models/person');

routes.get('/', async (req, res) => {
    const persons = await Person.find();
    res.render('persons', {persons});
});

routes.get('/:id', async(req, res) => {
    const person = await Person.findById(req.params.id);
    res.render('person', {person});
});

routes.post('/create', async (req, res) => {
    await Person.create({name: req.body.name, age: req.body.age, gender: req.body.gender});
    res.redirect('/');
});

module.exports = routes;