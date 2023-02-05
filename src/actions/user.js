export const CHANGE_FIELD = 'CHANGE_FIELD';
export const CHECK_LOGIN = 'CHECK_LOGIN';
export const AUTHENT_SUCCESS = 'AUTHENT_SUCCESS';
export const AUTHENT_ERROR = 'AUTHENT_ERROR';
export const LOGOUT = 'LOGOUT';
export const FETCH_FAV_RECIPES = 'FETCH_FAV_RECIPES';
export const SAVE_FAV_RECIPES = 'SAVE_FAV_RECIPES';

export function actionChangeField(newValue, inputName) {
  return {
    type: CHANGE_FIELD,
    payload: {
      newValue,
      inputName,
    },
  };
}

export function actionCheckLogin() {
  return {
    type: CHECK_LOGIN,
  };
}

export function actionAuthentSuccess(pseudo, token) {
  return {
    type: AUTHENT_SUCCESS,
    payload: {
      pseudo,
      token,
    },
  };
}

export function actionAuthentError() {
  return {
    type: AUTHENT_ERROR,
  };
}

export function actionLogout() {
  return {
    type: LOGOUT,
  };
}

export function actionFetchFavRecipes() {
  return {
    type: FETCH_FAV_RECIPES,
  };
}

export function actionSaveFavRecipes(favRecipes) {
  return {
    type: SAVE_FAV_RECIPES,
    payload: {
      favRecipes,
    },
  };
}
