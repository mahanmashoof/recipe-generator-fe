export interface RecipeRequest {
  ingredients: string;
  diet: string;
  portions: number;
  cuisine: string;
}

export interface FilteredRecipeData {
  title: string;
  ingredients: {
    title: string;
    quantity: number;
    unitOfMeasurement: string;
  }[];
  steps: string[];
}
