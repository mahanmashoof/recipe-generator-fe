import { useEffect, useState } from "react";
import type { FilteredRecipeData, RecipeRequest } from "../types";
import { useRecipeAPI } from "./service";

export const useRecipeApiFilter = (
  recipeReq: RecipeRequest,
  password: string
) => {
  const { loading, data, fetchRecipe } = useRecipeAPI(recipeReq, password);
  const [filteredData, setFilteredData] = useState<FilteredRecipeData>();

  useEffect(() => {
    const jsonString = data.match(/```json\n([\s\S]*)\n```/)?.[1];
    setFilteredData({
      title: jsonString ? JSON.parse(jsonString).title : "",
      ingredients: jsonString ? JSON.parse(jsonString).ingredients : [],
      steps: jsonString ? JSON.parse(jsonString).steps : [],
    });
  }, [data]);
  return { filteredData, loading, fetchRecipe };
};
