export const SET_RECIPES = "recipesActionTypes/SET_RECIPES";
export interface SetRecipesAction {
  type: typeof SET_RECIPES;
  recipes: [];
  hasMore: boolean;
}

export const GET_RECIPES = "recipesActionTypes/GET_RECIPES";
export interface GetRecipesAction {
  type: typeof GET_RECIPES;
  ingredients: string;
  query: string;
  page: number | string
}

export const GET_NEXT_PAGE_RECIPES = "recipesActionTypes/GET_NEXT_PAGE_RECIPES";
export interface GetNextPageRecipesAction {
  type: typeof GET_NEXT_PAGE_RECIPES;
  ingredients: string;
  query: string;
}

export const GET_RECIPES_REQUEST = "recipesActionTypes/GET_RECIPES_REQUEST";
export interface GetRecipesRequestAction {
  type: typeof GET_RECIPES_REQUEST;
}

export const GET_RECIPES_SUCCESS = "recipesActionTypes/GET_RECIPES_SUCCESS";
export interface GetRecipesSuccessAction {
  type: typeof GET_RECIPES_SUCCESS;
  recipes: [];
  page: string | number;
  hasMore: boolean;
}

export const GET_RECIPES_FAILURE = "recipesActionTypes/GET_RECIPES_FAILURE";
export interface GetRecipesFailureAction {
  type: typeof GET_RECIPES_FAILURE;
  error: Error | string | null;
}

export type RecipesAction =
  | SetRecipesAction
  | GetRecipesAction
  | GetRecipesRequestAction
  | GetRecipesSuccessAction
  | GetRecipesFailureAction
  | GetNextPageRecipesAction;
