import type { FilteredRecipeData } from "../types";

const RecipeUI = (data: FilteredRecipeData) => {
  return (
    <div className="">
      {data.title.length > 0 ? (
        <div>
          <h2 className="text-2xl font-bold mb-4 text-yellow-800">
            {data.title}
          </h2>
          <h3 className="text-xl font-semibold mb-2 text-yellow-700">
            Ingredients:
          </h3>
          <ul className="list-disc list-inside mb-4">
            {data.ingredients.map((ingredient, index) => (
              <li key={index} className="text-yellow-800">
                {ingredient.quantity} {ingredient.unitOfMeasurement}{" "}
                {ingredient.title}
              </li>
            ))}
          </ul>
          <h3 className="text-xl font-semibold mb-2 text-yellow-700">Steps:</h3>
          <ol className="list-decimal list-inside">
            {data.steps.map((step, index) => (
              <li key={index} className="mb-2 text-yellow-800">
                {step}
              </li>
            ))}
          </ol>
        </div>
      ) : (
        <p className="text-yellow-800" />
      )}
    </div>
  );
};

export default RecipeUI;
