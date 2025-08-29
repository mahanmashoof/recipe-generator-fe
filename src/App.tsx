import Navbar from "./components/Navbar";
import PortionsSelector from "./components/PortionsSelector";

function App() {
  const navbarHeight = 4;
  return (
    <div className="bg-yellow-500 h-screen">
      <Navbar pHeight={navbarHeight} />
      <div
        className={`p-8 flex md:flex-row flex-col gap-8 h-[calc(100vh-${
          navbarHeight * 16
        }px)]`}
      >
        <form className="w-1/3 bg-white/80 rounded-xl shadow-lg flex flex-col gap-6 p-6 justify-start border border-yellow-300">
          <h2 className="text-2xl font-bold text-yellow-700 mb-2">
            Recipe Generator
          </h2>
          <label className="flex flex-col gap-2 font-medium text-yellow-800">
            Ingredients
            <textarea
              placeholder="List ingredients here, separated by comma"
              className="p-3 w-full h-24 rounded border border-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              required
            />
          </label>
          <label className="flex flex-col gap-2 font-medium text-yellow-800">
            Diet
            <select
              className="p-3 rounded border border-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              required
            >
              <option value="protein_rich">Protein rich</option>
              <option value="vegan">Vegan</option>
              <option value="vegetarian">Vegetarian</option>
            </select>
          </label>
          <label className="flex flex-col gap-2 font-medium text-yellow-800">
            Portions
            <PortionsSelector />
          </label>
          <label className="flex flex-col gap-2 font-medium text-yellow-800">
            Cuisine
            <input
              className="p-3 rounded border border-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              placeholder="e.g. Italian, Thai, Persian"
              type="text"
              required
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
          <textarea
            defaultValue="Your recipe will appear here..."
            className="p-3 w-full h-full rounded border border-yellow-200 bg-yellow-50 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            readOnly
          />
        </section>
      </div>
    </div>
  );
}

export default App;
