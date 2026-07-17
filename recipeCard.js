export function createRecipeCard(recipe) {
    const card = document.createElement("article");
    card.className = "recipe-card";

    // Recipe Image
    const image = document.createElement("img");
    image.className = "recipe-image";
    image.src = recipe.image;
    image.alt = recipe.title;

    // Recipe Title
    const title = document.createElement("h3");
    title.className = "recipe-title";
    title.textContent = recipe.title;

    // Used Ingredients
    const usedIngredients = document.createElement("p");
    usedIngredients.className = "recipe-info";
    usedIngredients.innerHTML = `
        <strong>Ingredients Used:</strong> ${recipe.usedIngredientCount ?? recipe.usedIngredients?.length ?? 0}
    `;

    // Missing Ingredients
    const missingIngredients = document.createElement("p");
    missingIngredients.className = "recipe-info";
    missingIngredients.innerHTML = `
        <strong>Missing Ingredients:</strong> ${recipe.missedIngredientCount ?? recipe.missedIngredients?.length ?? 0}
    `;

    // View Recipe Button
    const button = document.createElement("button");
    button.className = "recipe-button";
    button.textContent = "View Recipe";

    button.addEventListener("click", (event) => {
        // Prevent the card click from firing twice
        event.stopPropagation();

        window.location.href = `recipe.html?id=${recipe.id}`;
    });

    // Assemble Card
    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(usedIngredients);
    card.appendChild(missingIngredients);
    card.appendChild(button);

    return card;
}