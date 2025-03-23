const API_URL = "http://localhost:3001/favorites";

export const getFavorites = async (userId) => {
  const res = await fetch(`${API_URL}?userId=${userId}`);
  if (!res.ok) throw new Error("Klaida gaunant mėgstamiausius");
  return await res.json();
};

export const isFavorite = async (userId, recipeId) => {
  const res = await fetch(`${API_URL}?userId=${userId}&recipeId=${recipeId}`);
  const data = await res.json();
  return data.length > 0 ? data[0] : null;
};

export const addFavorite = async (userId, recipe) => {
  const favorite = {
    userId,
    recipeId: recipe.id,
    recipe
  };

  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(favorite)
  });

  if (!res.ok) throw new Error("Nepavyko pridėti mėgstamiausio");
  return await res.json();
};

export const removeFavorite = async (favoriteId) => {
  const res = await fetch(`${API_URL}/${favoriteId}`, {
    method: "DELETE"
  });

  if (!res.ok) throw new Error("Nepavyko pašalinti mėgstamiausio");
  return true;
};
