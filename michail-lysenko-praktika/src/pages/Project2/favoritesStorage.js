export const getFavorites = (userEmail) => {
    const data = localStorage.getItem(`favorites_${userEmail}`);
    return data ? JSON.parse(data) : [];
  };
  
  export const saveFavorites = (userEmail, favorites) => {
    localStorage.setItem(`favorites_${userEmail}`, JSON.stringify(favorites));
  };
  
  export const toggleFavorite = (userEmail, recipe) => {
    const favorites = getFavorites(userEmail);
    const exists = favorites.find(f => f.id === recipe.id);
  
    const updated = exists
      ? favorites.filter(f => f.id !== recipe.id)
      : [...favorites, recipe];
  
    saveFavorites(userEmail, updated);
    return updated;
  };
  