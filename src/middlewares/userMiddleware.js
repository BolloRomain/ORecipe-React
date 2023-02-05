import axios from 'axios';
import {
  actionAuthentError, actionAuthentSuccess, actionFetchFavRecipes, actionSaveFavRecipes,
  CHECK_LOGIN, FETCH_FAV_RECIPES,
} from '../actions/user';
import { instanceAxios, requestLogin } from '../requests/requests';

const userMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case CHECK_LOGIN: {
      const { user } = store.getState();

      axios.post(
        'http://localhost:3001/login',
        {
          email: user.email,
          password: user.password,
        },
      ).then((result) => {
        store.dispatch(actionAuthentSuccess(result.data.pseudo, result.data.token));

        store.dispatch(actionFetchFavRecipes());
      }).catch(() => {
        store.dispatch(actionAuthentError());
      });

      break;
    }

    case 'CHECK_LOGIN_ASYNC': {
      const { user } = store.getState();
      const result = await requestLogin(user.email, user.password);

      if (result.status === 200) {
        store.dispatch(actionAuthentSuccess(result.data.pseudo, result.data.token));
      }
      else if (result.response.status === 401) {
        // dispatcher une action qui va afficher une erreur
      }

      break;
    }

    case FETCH_FAV_RECIPES: {
      const { user } = store.getState();
      const response = await instanceAxios.get('/favorites', {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      store.dispatch(actionSaveFavRecipes(response.data.favorites));

      break;
    }

    default:
      break;
  }

  next(action);
};

export default userMiddleware;
