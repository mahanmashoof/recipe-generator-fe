import { useState } from "react";
import Navbar from "./components/Navbar";
import PortionsSelector from "./components/PortionsSelector";
import { navbarHeight } from "./global.styles";
import { useRecipeAPI } from "./hooks/service";

function App() {
  const initialPortions = 4;
  const [ingredients, setIngredients] = useState("");
  const [diet, setDiet] = useState("");
  const [portions, setPortions] = useState(initialPortions);
  const [cuisine, setCuisine] = useState("");
  const [password, setPassword] = useState("");

  const recipeReq = {
    ingredients,
    diet,
    portions,
    cuisine,
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const recipe = await useRecipeAPI(recipeReq, password);
      console.log("Recipe:", recipe);
    } catch (err) {
      console.error("Error fetching recipe:", err);
    }
  };

  return (
    <div className="bg-yellow-500 h-screen">
      <Navbar pHeight={navbarHeight} />
      <div
        className={`p-8 flex md:flex-row flex-col gap-8 h-[calc(100vh-${
          navbarHeight * 16
        }px)]`}
      >
        <form
          className="w-1/3 bg-white/80 rounded-xl shadow-lg flex flex-col gap-6 p-6 justify-start border border-yellow-300"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold text-yellow-700 mb-2">
            Recipe Generator
          </h2>
          <label className="flex flex-col gap-2 font-medium text-yellow-800">
            Ingredients
            <textarea
              placeholder="List ingredients here, separated by comma"
              className="p-3 w-full h-24 rounded border border-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              required
              onChange={(e) => setIngredients(e.target.value)}
            />
          </label>
          <label className="flex flex-col gap-2 font-medium text-yellow-800">
            Select Diet
            <select
              className="p-3 rounded border border-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              required
              onChange={(e) => setDiet(e.currentTarget.value)}
            >
              <option value="">Select Diet</option>
              <option value="balanced">Balanced</option>
              <option value="high_fiber">High fiber</option>
              <option value="protein_rich">Protein rich</option>
              <option value="vegan">Vegan</option>
              <option value="vegetarian">Vegetarian</option>
            </select>
          </label>
          <label className="flex flex-col gap-2 font-medium text-yellow-800">
            Portions
            <PortionsSelector portions={portions} setPortions={setPortions} />
          </label>
          <label className="flex flex-col gap-2 font-medium text-yellow-800">
            Cuisine
            <input
              className="p-3 rounded border border-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              placeholder="e.g. Italian, Thai, Persian"
              type="text"
              required
              onChange={(e) => setCuisine(e.target.value)}
            />
          </label>
          <label className="flex flex-col gap-2 font-medium text-yellow-800">
            Password
            <input
              className="p-3 rounded border border-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              placeholder="enter correct password to generate recipe"
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button
            type="submit"
            className="mt-2 p-3 bg-yellow-500 text-yellow-900 font-semibold rounded-lg shadow hover:bg-yellow-600 transition"
          >
            🍳 Generate Recipe
          </button>
        </form>
        <section className="w-2/3 bg-white/70 rounded-xl shadow-lg p-6 flex flex-col">
          <h2 className="text-xl font-semibold text-yellow-700 mb-4">
            Your Recipe
          </h2>
          <div className="p-3 w-full h-full rounded border border-yellow-200 bg-yellow-50 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"></div>
        </section>
      </div>
    </div>
  );
}

export default App;
