import * as actions from "../actions/actionsInterfaces";

export interface RecipesState {
  recipes: [];
  hasMore: boolean;
  search: {
    ingredients: string;
    query: string;
    page: number | string
  }
}

export const initialState: RecipesState = {
  recipes: [],
  hasMore: false,
  search : {
    ingredients: '',
    query: '',
    page: 1
  }
};

export default function recipesReducer(
  state: RecipesState = initialState,
  action: actions.RecipesAction
): RecipesState {
  switch (action.type) {
    case actions.GET_RECIPES:
      return {
        ...state,
        search: {
          ingredients: action.ingredients,
          query: action.query,
          page: action.page
        }
      };
    case actions.GET_RECIPES_REQUEST:
      return {
        ...state,
        recipes: [],
        hasMore: false
      };
    case actions.SET_RECIPES:
      return {
        ...state,
        recipes: [...state.recipes, ...action.recipes],
        hasMore: action.hasMore,
        search: {
          ...state.search
        }
      };
    case actions.GET_RECIPES_SUCCESS:
      console.log(action)
      return {
        ...state,
        recipes: [...state.recipes, ...action.recipes],
        hasMore: action.hasMore,
        search: {
          ...state.search,
          page: action.page
        }
      };
    default:
      return state;
  }
}
