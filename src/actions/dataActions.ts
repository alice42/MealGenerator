import * as actions from "./actionsInterfaces";


  export function setRecipes(recipes: []): actions.SetRecipesAction {
    return {
      type: actions.SET_RECIPES,
      recipes,
      hasMore: recipes.length > 0
    };
  }
  
  export function getRecipes(
    ingredients: string,
    query: string,
    page: string | number
  ): actions.GetRecipesAction {
    return {
      type: actions.GET_RECIPES,
      ingredients,
      query,
      page
    };
  }

  export function getNextPageRecipes(
    ingredients: string,
    query: string,
  ): actions.GetNextPageRecipesAction {
    return {
      type: actions.GET_NEXT_PAGE_RECIPES,
      ingredients,
      query,
    };
  }
  
  export function getRecipesRequest(): actions.GetRecipesRequestAction {
    return {
      type: actions.GET_RECIPES_REQUEST
    };
  }
  
  export function getRecipesSuccess(
    recipes: [],
    page: number | string
  ): actions.GetRecipesSuccessAction {
    return {
      type: actions.GET_RECIPES_SUCCESS,
      recipes,
      page,
      hasMore: recipes.length > 0
    };
  }
  
  export function getRecipesFailure(
    error: Error | string
  ): actions.GetRecipesFailureAction {
    return {
      type: actions.GET_RECIPES_FAILURE,
      error
    };
  }
  