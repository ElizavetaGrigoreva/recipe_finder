import { searchRecipes } from "./api.js";
import { saveSearch } from "./searchHistory.js";

// Search page elements
const ingredientInput = document.getElementById("ingredient-input");
const searchButton = document.getElementById("search-button");
const historyList = document.getElementById("search-history");

// Load recent searches
loadSearchHistory();

searchButton.addEventListener("click", performSearch);

ingredientInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        performSearch();
    }
});

async function performSearch() {
    const ingredients = ingredientInput.value.trim();

    if (!ingredients) {
        alert("Please enter at least one ingredient.");
        return;
    }

    try {
        // Save search history
        saveSearch(ingredients);

        // Search Spoonacular
        const recipes = await searchRecipes(ingredients);

        // Save results so results.html can load them
        sessionStorage.setItem(
            "recipeResults",
            JSON.stringify(recipes)
        );

        // Save search text
        sessionStorage.setItem(
            "lastSearch",
            ingredients
        );

        // Go to results page
        window.location.href = "results.html";

    } catch (error) {
        console.error(error);

        alert(
            "Unable to retrieve recipes. Please try again."
        );
    }
}

function loadSearchHistory() {

    historyList.innerHTML = "";

    const history =
        JSON.parse(
            localStorage.getItem("recipeFinder_searchHistory")
        ) || [];

    history.forEach(item => {

        const li = document.createElement("li");

        li.textContent = item;

        li.style.cursor = "pointer";

        li.addEventListener("click", () => {

            ingredientInput.value = item;

            performSearch();

        });

        historyList.appendChild(li);

    });

}