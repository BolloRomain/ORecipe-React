import axios from 'axios';
import { actionSaveRecipes, actionSetIsLoadingFalse, FETCH_RECIPES } from '../actions/recipes';

const recipesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_RECIPES:
      axios.get('http://localhost:3001/recipes')
        .then((response) => {
          console.log(response);

          store.dispatch(actionSaveRecipes(response.data));
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          store.dispatch(actionSetIsLoadingFalse());
        });
      break;

    default:
      break;
  }

  next(action);
};

export default recipesMiddleware;
