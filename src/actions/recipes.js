export const FETCH_RECIPES = 'FETCH_RECIPES';
export const SAVE_RECIPES = 'SAVE_RECIPES';
export const SET_IS_LOADING_FALSE = 'SET_IS_LOADING_FALSE';

export function actionFetchRecipes() {
  return {
    type: FETCH_RECIPES,
  };
}

export function actionSaveRecipes(recipes) {
  return {
    type: SAVE_RECIPES,
    payload: recipes,
  };
}

export function actionSetIsLoadingFalse() {
  return {
    type: SET_IS_LOADING_FALSE,
  };
}
