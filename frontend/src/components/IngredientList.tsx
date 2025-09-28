import React, { useEffect, useState } from 'react';
import { fetchIngredients } from '../services/apiService';
import { Ingredient } from '../types';

const IngredientList: React.FC = () => {
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadIngredients = async () => {
            try {
                const data = await fetchIngredients();
                setIngredients(data);
            } catch (err) {
                setError('Failed to fetch ingredients');
            } finally {
                setLoading(false);
            }
        };

        loadIngredients();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Ingredient List</h2>
            <ul>
                {ingredients.map((ingredient) => (
                    <li key={ingredient.id}>
                        {ingredient.name} - {ingredient.servingSize}g, {ingredient.protein}g protein
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default IngredientList;