const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Dishes = require('../models/dishes');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.get((req,res,next) => {
    Dishes.find({})
    .then((dishes) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/js');
        res.json(dishes);
    }, (err) => next(err))
    .catch((err) => next(err)); 
})

.post((req,res,next) => {
    Dishes.create(req.body)
    .then((dish) => {
        console.log("Dish Created",dish);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/js');
        res.json(dishes);
    }, (err) => next(err))
    .catch((err) => next(err));  
})

.put((req,res,next) => {
    res.statusCode = 403;
    res.end('Put operation not supported on dishes');   
})

.delete((req,res,next) => {
    Dishes.remove({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/js');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

//endpoints for dishId
dishRouter.route('/:dishId')
.get((req,res,next) => {
    Dishes.findById(req.params.dishId)
    .then((dish) => {
        console.log("Dish Created",dish);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/js');
        res.json(dishes);
    }, (err) => next(err))
    .catch((err) => next(err)); 
})

.post((req,res,next) => {
    res.end('Post operation not supported on dishes/' + req.params.dishId);   
})

.put((req,res,next) => {
    Dishes.findByIdAndUpdate(req.params.dishId, {
        $set: req.body
    }, { new: true})
    .then((dish) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/js');
        res.json(dishes);
    }, (err) => next(err))
    .catch((err) => next(err));   
})

.delete((req,res,next) => {
    Dishes.findByIdAndRemove(dish.params.dishId)
    .then((resp) =>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/js');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err)); 
}); 

// Routes for comments
dishRouter.route('/:dishId/comments')
.get((req,res,next) => {
    Dishes.findById(req.params.dishId)
    .then((dish) => {
        if (dish != null){
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/js');
            res.json(dish.comments);
        }
        else{
            err = new Error('Dish '+ req.params.dishId + " not found");
            err.status = 404;
            return next(err);
        }
    }, (err) => next(err))
    .catch((err) => next(err)); 
})

.post((req,res,next) => {
    Dishes.findById(req.params.dishId)
    .then((dish) => {
        if (dish != null){
            dish.comments.push(req.body);
            dish.save()
            .then((dish) =>{
                res.StatusCode = 200;
                res.setHeader('Content-Type', 'application/js')
                res.json(dish);
            })
        }
        else{
            err = new Error('Dish '+ req.params.dishId + " not found");
            err.status = 404;
            return next(err);
        };
    }, (err) => next(err))
    .catch((err) => next(err));  
})

.put((req,res,next) => {
    res.statusCode = 403;
    res.end('Put operation not supported on /dishes/' + req.params.dishId +'/comments');   
})

.delete((req,res,next) => {
    Dishes.findById(req.params.dishId)
    .then((dish) => {
        if (dish != null){
            for(let i = (dish.comment.length - 1);i>=0; i--){
                dish.comments.id(dish.comments[i]._id.remove)
            }
            dish.save()
            .then((dish) =>{
                res.StatusCode = 200;
                res.setHeader('Content-Type', 'application/js')
                res.json(dish);
            }, (err) => next(err))
        }
        else{
            err = new Error('Dish '+ req.params.dishId + " not found");
            err.status = 404;
            return next(err);
        };
    }, (err) => next(err))
    .catch((err) => next(err));
});

//endpoints for dishId
dishRouter.route('/:dishId/comments/:commentID')
.get((req,res,next) => {
    Dishes.findById(req.params.dishId)
    .then((dish) => {
        console.log("Dish Created",dish);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/js');
        res.json(dishes);
    }, (err) => next(err))
    .catch((err) => next(err)); 
})

.post((req,res,next) => {
    res.end('Post operation not supported on dishes/' + req.params.dishId);   
})

.put((req,res,next) => {
    Dishes.findByIdAndUpdate(req.params.dishId, {
        $set: req.body
    }, { new: true})
    .then((dish) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/js');
        res.json(dishes);
    }, (err) => next(err))
    .catch((err) => next(err));   
})

.delete((req,res,next) => {
    Dishes.findByIdAndRemove(dish.params.dishId)
    .then((resp) =>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/js');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err)); 
});

module.exports = dishRouter;
