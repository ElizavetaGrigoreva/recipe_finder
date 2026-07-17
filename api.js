import { API_KEY } from "./config.js";

const BASE_URL = "https://api.spoonacular.com/recipes";

/**
 * Search recipes by ingredients.
 */
export async function searchRecipes(ingredients) {
    const url =
        `${BASE_URL}/findByIngredients` +
        `?ingredients=${encodeURIComponent(ingredients)}` +
        `&number=20` +
        `&ranking=1` +
        `&ignorePantry=true` +
        `&apiKey=${API_KEY}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(
            `Recipe search failed (${response.status})`
        );
    }

    const recipes = await response.json();

    return recipes;
}

/**
 * Get complete recipe information.
 */
export async function getRecipeDetails(recipeId) {

    const url =
        `${BASE_URL}/${recipeId}/information` +
        `?includeNutrition=false` +
        `&apiKey=${API_KEY}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(
            `Unable to load recipe (${response.status})`
        );
    }

    return await response.json();
}

/**
 * Optional random recipes.
 */
export async function getRandomRecipes(number = 10) {

    const url =
        `${BASE_URL}/random` +
        `?number=${number}` +
        `&apiKey=${API_KEY}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Unable to load random recipes.");
    }

    const data = await response.json();

    return data.recipes;
}

/**
 * Search recipes by name.
 */
export async function searchRecipesByName(query) {

    const url =
        `${BASE_URL}/complexSearch` +
        `?query=${encodeURIComponent(query)}` +
        `&number=20` +
        `&apiKey=${API_KEY}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Recipe name search failed.");
    }

    const data = await response.json();

    return data.results;
}