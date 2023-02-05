export function findRecipe(recipes, searchedSlug) {
  const recipe = recipes.find((testedRecipe) => {
    return testedRecipe.slug === searchedSlug;
  });
  return recipe;
}

export function getTitle(recipeList = []) {
  if (recipeList.length === 1) {
    return 'Voici notre recette préférée';
  }
  if (recipeList.length > 0) {
    return `Voici nos ${recipeList.length} recettes`;
  }
  return 'Voici nos recettes';
}
