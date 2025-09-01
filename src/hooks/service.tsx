import axios from "axios";

interface RecipeRequest {
  ingredients: string;
  diet: string;
  portions: number;
  cuisine: string;
}

export const useRecipeAPI = async (recipeReq: RecipeRequest) => {
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
        password: "1979",
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
  } catch (err) {
    console.error("Error fetching recipe:", err);
    throw err;
  }
};
