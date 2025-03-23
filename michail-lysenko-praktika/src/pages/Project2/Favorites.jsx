import { useContext, useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import { AuthContext } from "../../AuthContext";
import { getFavorites, removeFavorite } from "./favoritesApi";

const Favorites = () => {
  const { user } = useContext(AuthContext);
  const [favorites, setFavorites] = useState([]);

  // Fetch favorites from json-server on mount
  useEffect(() => {
    const fetchFavorites = async () => {
      if (user) {
        try {
          const favs = await getFavorites(user.id);
          setFavorites(favs);
        } catch (error) {
          console.error("Klaida gaunant mėgstamiausius:", error);
        }
      }
    };

    fetchFavorites();
  }, [user]);

  // Handle remove from favorites (API-based)
  const handleRemove = async (recipe) => {
    const target = favorites.find(f => f.recipeId === recipe.id);
    if (target) {
      try {
        await removeFavorite(target.id);
        const updated = await getFavorites(user.id);
        setFavorites(updated);
      } catch (error) {
        console.error("Klaida šalinant mėgstamiausią:", error);
      }
    }
  };

  return (
    <div>
      <h2>Favorite Recipes</h2>
      {favorites.length === 0 ? (
        <p>You have no favorite recipes yet.</p>
      ) : (
        favorites.map(fav => (
          <RecipeCard
            key={fav.id}
            recipe={fav.recipe}
            isFavorite={true}
            onToggleFavorite={handleRemove}
          />
        ))
      )}
    </div>
  );
};

export default Favorites;
