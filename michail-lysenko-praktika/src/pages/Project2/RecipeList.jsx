import { useEffect, useState, useContext } from "react";
import RecipeCard from "./RecipeCard";
import { AuthContext } from "../../AuthContext";
import { getFavorites, removeFavorite, isFavorite, addFavorite } from "./favoritesApi";

const RecipeList = () => {
  const { user } = useContext(AuthContext);
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [page, setPage] = useState(1);

  const recipesPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://dummyjson.com/recipes");
        const data = await res.json();
        setRecipes(data.recipes || []);
  
        if (user) {
          const favs = await getFavorites(user.id); // 👈 await čia svarbiausia
          setFavorites(favs);
        }
      } catch (err) {
        console.error("Klaida gaunant duomenis:", err);
      }
    };
  
    fetchData();
  }, [user]);

  const handleToggleFavorite = async (recipe) => {
    const existing = await isFavorite(user.id, recipe.id);
    if (existing) {
      await removeFavorite(existing.id);
    } else {
      await addFavorite(user.id, recipe);
    }
    // Reload favorites
    const updated = await getFavorites(user.id);
    setFavorites(updated);
  };
  

  const paginatedRecipes = recipes.slice(
    (page - 1) * recipesPerPage,
    page * recipesPerPage
  );

  return (
    <div>
      {paginatedRecipes.map(recipe => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          isFavorite={favorites.some(f => f.recipeId === recipe.id)}
          onToggleFavorite={handleToggleFavorite}
        />
      ))}

      <div className="mt-4 flex gap-2">
        <button onClick={() => setPage(p => Math.max(p - 1, 1))} disabled={page === 1}>
          Atgal
        </button>
        <button
          onClick={() => setPage(p => p + 1)}
          disabled={page * recipesPerPage >= recipes.length}
        >
          Kitas
        </button>
      </div>
    </div>
  );
};

export default RecipeList;
