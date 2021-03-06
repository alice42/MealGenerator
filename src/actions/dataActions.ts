import * as actionsTypes from "./actionsInterfaces";

  export function setRecipes(
    recipes: []
  ): actionsTypes.SetRecipesAction {
    return {
      type: actionsTypes.SET_RECIPES,
      recipes,
      hasMore: recipes.length > 0
    };
  }
  
  export function getRecipes(
    ingredients: string,
    query: string,
    page: string | number
  ): actionsTypes.GetRecipesAction {
    return {
      type: actionsTypes.GET_RECIPES,
      ingredients,
      query,
      page
    };
  }

  export function getNextPageRecipes(
    ingredients: string,
    query: string,
    page?: number | string
  ): actionsTypes.GetNextPageRecipesAction {
    return {
      type: actionsTypes.GET_NEXT_PAGE_RECIPES,
      ingredients,
      query,
      page
    };
  }
  
  export function getRecipesRequest(
  ): actionsTypes.GetRecipesRequestAction {
    return {
      type: actionsTypes.GET_RECIPES_REQUEST
    };
  }
  
  export function getRecipesSuccess(
    recipes: [],
    page: number | string
  ): actionsTypes.GetRecipesSuccessAction {
    return {
      type: actionsTypes.GET_RECIPES_SUCCESS,
      recipes,
      page,
      hasMore: recipes.length > 0
    };
  }
  
  export function getRecipesFailure(
    error: Error | string
  ): actionsTypes.GetRecipesFailureAction {
    return {
      type: actionsTypes.GET_RECIPES_FAILURE,
      error
    };
  }
  