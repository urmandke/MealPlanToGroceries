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
        type: Number,
        require: true
    },
    Protein:{
        type: Number,
        required: true
    },
    Carbs:{
        type: Number,
        required: true
    },
    Fats:{
        type: Number,
        required: true
    },
    price:{
        type: Currency,
        required: true,
        min: 0
    }
},{
    timestamps: true
});

let Ingredients = mongoose.model('Ingredient', ingredientSchema);

module.exports = Ingredients;
