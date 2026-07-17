import { APP_SETTINGS } from "./config.js";
import { saveData, getData } from "./storage.js";

const FAVORITES_KEY = `${APP_SETTINGS.storagePrefix}favorites`;

export function getFavorites() {
    return getData(FAVORITES_KEY) || [];
}

export function addFavorite(recipe) {
    const favorites = getFavorites();

    const exists = favorites.some(
        item => item.id === recipe.id
    );

    if (!exists) {
        favorites.push(recipe);
        saveData(FAVORITES_KEY, favorites);
    }
}

export function removeFavorite(recipeId) {
    const favorites = getFavorites();

    const updatedFavorites = favorites.filter(
        recipe => recipe.id !== recipeId
    );

    saveData(FAVORITES_KEY, updatedFavorites);
}

export function toggleFavorite(recipe) {
    const favorites = getFavorites();

    const exists = favorites.some(
        item => item.id === recipe.id
    );

    if (exists) {
        removeFavorite(recipe.id);
    } else {
        addFavorite(recipe);
    }
}