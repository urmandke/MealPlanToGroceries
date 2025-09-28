export interface Ingredient {
    id: string;
    name: string;
    servingSize: number;
    protein: number;
    date: Date;
}

export interface APIResponse<T> {
    success: boolean;
    data: T;
    message?: string;
}