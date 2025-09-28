import axios from 'axios';
import { Ingredient, APIResponse } from '../types';

const API_URL = 'http://localhost:3000/ingredients';

export const fetchIngredients = async (): Promise<APIResponse<Ingredient[]>> => {
    const response = await axios.get<APIResponse<Ingredient[]>>(API_URL);
    return response.data;
};

export const fetchIngredientById = async (id: string): Promise<APIResponse<Ingredient>> => {
    const response = await axios.get<APIResponse<Ingredient>>(`${API_URL}/${id}`);
    return response.data;
};

export const createIngredient = async (ingredient: Ingredient): Promise<APIResponse<Ingredient>> => {
    const response = await axios.post<APIResponse<Ingredient>>(API_URL, ingredient);
    return response.data;
};

export const updateIngredient = async (id: string, ingredient: Ingredient): Promise<APIResponse<Ingredient>> => {
    const response = await axios.put<APIResponse<Ingredient>>(`${API_URL}/${id}`, ingredient);
    return response.data;
};

export const deleteIngredient = async (id: string): Promise<APIResponse<void>> => {
    const response = await axios.delete<APIResponse<void>>(`${API_URL}/${id}`);
    return response.data;
};