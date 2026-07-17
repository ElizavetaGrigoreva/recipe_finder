import { APP_SETTINGS } from "./config.js";
import { saveData, getData } from "./storage.js";

const HISTORY_KEY = `${APP_SETTINGS.storagePrefix}searchHistory`;

export function saveSearch(ingredients) {
    const history = getData(HISTORY_KEY) || [];

    const updatedHistory = [
        ingredients,
        ...history.filter(item => item !== ingredients)
    ].slice(0, 10);

    saveData(HISTORY_KEY, updatedHistory);
}

export function getSearchHistory() {
    return getData(HISTORY_KEY) || [];
}

export function clearSearchHistory() {
    saveData(HISTORY_KEY, []);
}