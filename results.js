import { createRecipeCard } from "./recipeCard.js";

// Get the results container
const resultsContainer = document.getElementById("results");

// Retrieve recipes saved by app.js
const recipes =
    JSON.parse(sessionStorage.getItem("recipeResults")) || [];

// If no recipes exist, return to the search page
if (recipes.length === 0) {
    alert("No search results found. Please search for recipes first.");
    window.location.href = "index.html";
}

// Display all recipe cards
displayRecipes(recipes);

function displayRecipes(recipeList) {
    resultsContainer.innerHTML = "";

    recipeList.forEach(recipe => {

        const card = createRecipeCard(recipe);

        card.addEventListener("click", () => {

            // Save selected recipe id
            sessionStorage.setItem(
                "selectedRecipeId",
                recipe.id
            );

            // Open recipe details page
            window.location.href = `recipe.html?id=${recipe.id}`;

        });

        resultsContainer.appendChild(card);

    });
}

// Optional: display search text in the page title
const lastSearch = sessionStorage.getItem("lastSearch");

if (lastSearch) {

    document.title = `Recipes for "${lastSearch}"`;

    const heading = document.querySelector(".results-info h2");

    if (heading) {
        heading.textContent = `Recipes for "${lastSearch}"`;
    }

}