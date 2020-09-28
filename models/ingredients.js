/*jshint esversion: 6 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const ingredientSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    servingSize:{
        type: Number, //in grams - standard serving size is 100g
        require: true
    },
    protein:{
        type: Number,
        required: true,
        min: 0
    },
    carbs:{
        type: Number,
        required: true,
        default: 0
    },
    fats:{
        type: Number,
        required: true,
        default: 0
    },
    price:{
        type: Currency,
        min: 0
    }
},{
    timestamps: true
});

let Ingredients = mongoose.model('Ingredient', ingredientSchema);

module.exports = Ingredients;
