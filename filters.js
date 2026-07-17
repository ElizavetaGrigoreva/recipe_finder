export function applyFilters(recipes, filters = {}) {
    return recipes.filter(recipe => {
        let matches = true;

        if (filters.maxIngredients) {
            const ingredientCount =
                recipe.ingredients?.length || 0;

            matches =
                matches &&
                ingredientCount <= filters.maxIngredients;
        }

        if (filters.includeIngredient) {
            const ingredientNames =
                recipe.ingredients.map(item =>
                    (item.name || item).toLowerCase()
                );

            matches =
                matches &&
                ingredientNames.includes(
                    filters.includeIngredient.toLowerCase()
                );
        }

        if (filters.excludeIngredient) {
            const ingredientNames =
                recipe.ingredients.map(item =>
                    (item.name || item).toLowerCase()
                );

            matches =
                matches &&
                !ingredientNames.includes(
                    filters.excludeIngredient.toLowerCase()
                );
        }

        return matches;
    });
}