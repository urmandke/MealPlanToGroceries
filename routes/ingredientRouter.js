const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Ingredients = require('../models/ingredients');

const ingredientRouter = express.Router();

ingredientRouter.use(bodyParser.json());

ingredientRouter.route('/')
.get((req,res,next) => {
    Ingredients.find({})
    .then((ingredients) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/js');
        res.json(ingredients);
    }, (err) => next(err))
    .catch((err) => next(err)); 
})

.head((req,res,next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/js');
        res.end();
        (err) => next(err)
})

.post((req,res,next) => {
    Ingredients.create(req.body)
    .then((ingredient) => {
        console.log("Ingredient Created",ingredient);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/js');
        res.json(ingredient);
    }, (err) => next(err))
    .catch((err) => next(err));  
})

.put((req,res,next) => {
    res.statusCode = 403;
    res.end('Put operation not supported on ingredients');   
})

//delete operation should be allowed only for admins
.delete((req,res,next) => {
    Ingredients.remove({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/js');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
})

.options((req,res,next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/js');
        res.setHeader('Allow','GET, HEAD, OPTIONS, POST, DELETE');
        res.end();
        (err) => next(err)
});

//endpoints for ingredientId
ingredientRouter.route('/:ingredientId')
.get((req,res,next) => {
    Ingredients.findById(req.params.ingredientId)
    .then((ingredient) => {
        console.log("Ingredient is found");
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/js');
        res.json(ingredient);
    }, (err) => next(err))
    .catch((err) => next(err)); 
})

.options((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/js');
    res.setHeader('Allow','GET, HEAD, OPTIONS, POST, DELETE, TRACE');
    res.end();
    (err) => next(err)
})

.head((req,res,next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/js');
        res.end();
        (err) => next(err)
})

.post((req,res,next) => {
    res.end('Post operation not supported on ingredients/' + req.params.ingredientId);   
})

.put((req,res,next) => {
    Ingredients.findByIdAndUpdate(req.params.ingredientId, {
        $set: req.body
    }, { new: true})
    .then((ingredient) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/js');
        res.json(ingredient);
    }, (err) => next(err))
    .catch((err) => next(err));   
})

.delete((req,res,next) => {
    Ingredients.findByIdAndRemove(req.params.ingredientId)
    .then((resp) =>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/js');
        res.end("Ingredient with ID:" + req.params.ingredientId + " deleted");
    }, (err) => next(err))
    .catch((err) => next(err)); 
})

.trace((req,res,next) => {
    Ingredients.findById(req.params.ingredientId)
    .then((ingredient) => {
        console.log("Ingredient is found");
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/js');
        res.send("Ingredient is avaliable in the database");
    }, (err) => next(err))
    .catch((err) => next(err)); 
});

module.exports = ingredientRouter;
