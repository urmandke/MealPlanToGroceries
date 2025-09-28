import { Router } from 'express';
import IngredientController from '../controllers/ingredientController';

const router = Router();
const ingredientController = new IngredientController();

router.get('/ingredients', ingredientController.getAllIngredients);
router.get('/ingredients/:ingredientId', ingredientController.getIngredientById);
router.post('/ingredients', ingredientController.createIngredient);
router.put('/ingredients/:ingredientId', ingredientController.updateIngredient);
router.delete('/ingredients', ingredientController.deleteIngredient);

export default router;