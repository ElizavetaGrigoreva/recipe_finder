import { getRecipeDetails } from "./api.js";

const recipeTitle = document.getElementById("recipe-title");
const recipeImage = document.getElementById("recipe-image");
const prepTime = document.getElementById("prep-time");
const cookTime = document.getElementById("cook-time");
const servings = document.getElementById("servings");
const ingredientsList = document.getElementById("ingredients-list");
const instructionsList = document.getElementById("instructions-list");

// Read recipe ID from URL
const params = new URLSearchParams(window.location.search);
const recipeId = params.get("id");

if (!recipeId) {
    alert("No recipe selected.");
    window.location.href = "results.html";
}

loadRecipe(recipeId);

async function loadRecipe(id) {
    try {
        const recipe = await getRecipeDetails(id);

        // Basic Information
        recipeTitle.textContent = recipe.title;
        recipeImage.src = recipe.image;
        recipeImage.alt = recipe.title;

        prepTime.textContent = `${recipe.readyInMinutes} minutes`;

        // Spoonacular only returns total cooking time
        cookTime.textContent = `${recipe.readyInMinutes} minutes`;

        servings.textContent = recipe.servings;

        // Ingredients
        ingredientsList.innerHTML = "";

        recipe.extendedIngredients.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item.original;
            ingredientsList.appendChild(li);
        });

        // Instructions
        instructionsList.innerHTML = "";

        if (
            recipe.analyzedInstructions &&
            recipe.analyzedInstructions.length > 0
        ) {
            recipe.analyzedInstructions[0].steps.forEach(step => {
                const li = document.createElement("li");
                li.textContent = step.step;
                instructionsList.appendChild(li);
            });
        } else if (recipe.instructions) {
            // Fallback for recipes without analyzed instructions
            recipe.instructions
                .split(". ")
                .filter(step => step.trim() !== "")
                .forEach(step => {
                    const li = document.createElement("li");
                    li.textContent = step.trim();
                    instructionsList.appendChild(li);
                });
        } else {
            const li = document.createElement("li");
            li.textContent =
                "No cooking instructions available for this recipe.";
            instructionsList.appendChild(li);
        }

    } catch (error) {
        console.error(error);

        alert("Unable to load recipe details.");

        window.location.href = "results.html";
    }
}