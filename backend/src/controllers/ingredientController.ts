import { Request, Response } from 'express';
import IngredientService from '../services/ingredientService';

class IngredientController {
    private ingredientService: IngredientService;

    constructor() {
        this.ingredientService = new IngredientService();
    }

    public getAllIngredients = async (req: Request, res: Response): Promise<void> => {
        try {
            const ingredients = await this.ingredientService.fetchAllIngredients();
            res.status(200).json(ingredients);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching ingredients', error });
        }
    };

    public getIngredientById = async (req: Request, res: Response): Promise<void> => {
        const { ingredientId } = req.params;
        try {
            const ingredient = await this.ingredientService.fetchIngredientById(ingredientId);
            if (ingredient) {
                res.status(200).json(ingredient);
            } else {
                res.status(404).json({ message: 'Ingredient not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error fetching ingredient', error });
        }
    };

    public createIngredient = async (req: Request, res: Response): Promise<void> => {
        try {
            const newIngredient = await this.ingredientService.addIngredient(req.body);
            res.status(201).json(newIngredient);
        } catch (error) {
            res.status(500).json({ message: 'Error creating ingredient', error });
        }
    };

    public updateIngredient = async (req: Request, res: Response): Promise<void> => {
        const { ingredientId } = req.params;
        try {
            const updatedIngredient = await this.ingredientService.updateIngredient(ingredientId, req.body);
            if (updatedIngredient) {
                res.status(200).json(updatedIngredient);
            } else {
                res.status(404).json({ message: 'Ingredient not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error updating ingredient', error });
        }
    };

    public deleteIngredient = async (req: Request, res: Response): Promise<void> => {
        const { ingredientId } = req.params;
        try {
            const result = await this.ingredientService.removeIngredient(ingredientId);
            if (result) {
                res.status(204).send();
            } else {
                res.status(404).json({ message: 'Ingredient not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error deleting ingredient', error });
        }
    };
}

export default IngredientController;