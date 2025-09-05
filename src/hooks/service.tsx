import axios from "axios";
import type { RecipeRequest } from "../types";
import { useState } from "react";

export const useRecipeAPI = (recipeReq: RecipeRequest, password: string) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");
  const fetchRecipe = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:8081/recipe", {
        params: {
          ingredients: recipeReq.ingredients,
          dietType: recipeReq.diet,
          portions: recipeReq.portions,
          cuisine: recipeReq.cuisine,
        },
        headers: {
          "Content-Type": "application/json",
          password: password,
        },
      });
      setData(res.data);
    } catch (err: any) {
      if (err.status === 401) {
        return "Incorrect password";
      } else {
        console.error("Error in API call:", err);
      }
    } finally {
      setLoading(false);
    }
  };
  return { loading, data, fetchRecipe };
};
