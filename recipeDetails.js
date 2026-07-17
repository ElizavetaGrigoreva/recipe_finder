export function showRecipeDetails(recipe) {
    const detailsWindow = document.createElement("div");

    detailsWindow.className = "recipe-details";

    detailsWindow.innerHTML = `
        <div class="details-content">
            <h2>${recipe.title}</h2>

            <img 
                src="${recipe.image}" 
                alt="${recipe.title}"
            >

            <h3>Ingredients</h3>
            <ul>
                ${
                    recipe.ingredients
                        .map(
                            ingredient =>
                                `<li>${ingredient.name || ingredient}</li>`
                        )
                        .join("")
                }
            </ul>

            <h3>Instructions</h3>
            <p>
                ${
                    recipe.instructions ||
                    "Instructions not available."
                }
            </p>

            <button id="close-details">
                Close
            </button>
        </div>
    `;

    document.body.appendChild(detailsWindow);

    document
        .getElementById("close-details")
        .addEventListener("click", () => {
            detailsWindow.remove();
        });
}