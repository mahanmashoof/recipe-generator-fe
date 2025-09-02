import axios from "axios";
import type { RecipeRequest } from "../types";

export const useRecipeAPI = async (
  recipeReq: RecipeRequest,
  password: string
) => {
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
    if (typeof res.data === "string") {
      try {
        const jsonString = res.data.match(/```json\n([\s\S]*)\n```/)?.[1];
        if (jsonString) {
          return JSON.parse(jsonString);
        }
      } catch (parseError) {
        console.error("Error parsing stringified JSON:", parseError);
      }
    }
    return res.data;
  } catch (err: any) {
    if (err.status === 401) {
      alert("Incorrect password");
    } else {
      console.error("Error in API call:", err);
    }
  }
};
