import type { RecipeRequest } from "../types";
import { useRecipeAPI } from "./service";

export const useRecipeApiFilter = (
  recipeReq: RecipeRequest,
  password: string
) => {
  const response = useRecipeAPI(recipeReq, password);
  return response;
};
