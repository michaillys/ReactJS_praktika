import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const RecipeDetail = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        fetch(`https://dummyjson.com/recipes/${id}`)
            .then((res) => res.json())
            .then(setRecipe);
    }, [id]);

    if (!recipe) return <p>Loading...</p>;

    return (
        <div className="p-4">
            <h1>{recipe.name}</h1>
            <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
            <p><strong>Ingredients:</strong> {recipe.ingredients.join(", ")}</p>
            <p><strong>Instructions:</strong> {recipe.instructions}</p>
        </div>
    );
};

export default RecipeDetail;
