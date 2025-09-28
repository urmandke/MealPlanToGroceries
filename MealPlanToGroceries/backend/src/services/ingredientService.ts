import { Ingredient } from '../types';
import IngredientModel from '../models/ingredientModel';

export class IngredientService {
    async fetchAllIngredients(): Promise<Ingredient[]> {
        return await IngredientModel.find();
    }

    async fetchIngredientById(id: string): Promise<Ingredient | null> {
        return await IngredientModel.findById(id);
    }

    async addIngredient(ingredientData: Ingredient): Promise<Ingredient> {
        const ingredient = new IngredientModel(ingredientData);
        return await ingredient.save();
    }

    async updateIngredient(id: string, ingredientData: Partial<Ingredient>): Promise<Ingredient | null> {
        return await IngredientModel.findByIdAndUpdate(id, ingredientData, { new: true });
    }

    async removeIngredient(id: string): Promise<void> {
        await IngredientModel.findByIdAndDelete(id);
    }
}