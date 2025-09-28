import mongoose, { Document, Schema } from 'mongoose';

export interface IIngredient extends Document {
    name: string;
    servingSize: number;
    protein: number;
    date: Date;
}

const ingredientSchema: Schema = new Schema({
    name: { type: String, required: true },
    servingSize: { type: Number, required: true },
    protein: { type: Number, required: true },
    date: { type: Date, required: true }
});

export const Ingredient = mongoose.model<IIngredient>('Ingredient', ingredientSchema);