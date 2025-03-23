import { Link } from "react-router-dom";

const RecipeCard = ({ recipe, isFavorite, onToggleFavorite }) => {
  return (
    <div className="border p-3 rounded mb-4 shadow">
      <h2>{recipe.name}</h2>
      <p>Cuisine: {recipe.cuisine}</p>
      <button onClick={() => onToggleFavorite(recipe)}>
        {isFavorite ? "❤️" : "🤍"}
      </button>
      <br />
      <Link to={`/project2/recipe/${recipe.id}`}>View</Link>
    </div>
  );
};

export default RecipeCard;
