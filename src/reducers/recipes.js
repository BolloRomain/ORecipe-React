import { SAVE_RECIPES, SET_IS_LOADING_FALSE } from '../actions/recipes';

export const initialState = {
  list: [],
  isLoading: true,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_RECIPES:
      return {
        ...state,
        list: action.payload,
      };

    case SET_IS_LOADING_FALSE:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default reducer;
