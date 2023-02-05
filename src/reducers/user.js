import {
  AUTHENT_ERROR, AUTHENT_SUCCESS, CHANGE_FIELD, LOGOUT, SAVE_FAV_RECIPES,
} from '../actions/user';

export const initialState = {
  logged: false,
  email: 'michalak@mail.io',
  password: 'delphine',
  pseudo: '',
  message: '',
  token: null,
  favRecipes: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:

      return {
        ...state,
        [action.payload.inputName]: action.payload.newValue,
      };

    case AUTHENT_SUCCESS:
      return {
        ...state,
        logged: true,
        pseudo: action.payload.pseudo,
        email: '',
        password: '',
        message: `Bienvenue ${action.payload.pseudo}`,
        token: action.payload.token,
      };

    case AUTHENT_ERROR:

      return {
        ...state,
        message: 'Identifiants invalides ...',
      };

    case LOGOUT:

      return {
        ...state,
        logged: false,
        pseudo: '',
        message: '',
      };

    case SAVE_FAV_RECIPES:
      return {
        ...state,
        favRecipes: action.payload.favRecipes,
      };

    default:
      return state;
  }
};

export default reducer;
