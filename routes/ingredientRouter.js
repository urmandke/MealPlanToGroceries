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
});

//endpoints for dishId
ingredientRouter.route('/:ingredientId')
.get((req,res,next) => {
    Dishes.findById(req.params.ingredientId)
    .then((ingredient) => {
        console.log("Ingredient found",ingredientId);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/js');
        res.json(ingredient);
    }, (err) => next(err))
    .catch((err) => next(err)); 
})

.post((req,res,next) => {
    res.end('Post operation not supported on dishes/' + req.params.dishId);   
})

.put((req,res,next) => {
    Ingredients.findByIdAndUpdate(req.params.dishId, {
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
    Ingredients.findByIdAndRemove(req.params.dishId)
    .then((resp) =>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/js');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err)); 
}); 

module.exports = ingredientRouter;
