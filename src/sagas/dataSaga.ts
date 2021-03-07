import { put, call, takeEvery, all, fork, select } from "redux-saga/effects";

import { fetchRecipes } from "../services/dataServices";
import * as actionCreators from "../actions/dataActions";
import * as actionTypes from "../actions/actionsInterfaces";

function* onLoadRecipes({ ingredients, query, page }: actionTypes.GetRecipesAction) {
  try {
    yield put(actionCreators.getRecipesRequest());
    const data = yield call(fetchRecipes, ingredients, query, page);
    console.log('bbbb', data)
    if (data.results && data.results.length)
      yield put(actionCreators.getRecipesSuccess(data.results, page));
    else if (data.results && !data.results.length)
      yield put(actionCreators.getRecipesSuccess(data.results, page));
    else yield put(actionCreators.getRecipesFailure(data.error));  
  } catch (error) {
   
    yield put(actionCreators.getRecipesFailure(error.response.data.error));
  }
}

function* onLoadNextPageRecipes({ ingredients, query, page }: actionTypes.GetRecipesAction) {
  try {
    const nextPage = !page && page !== 1 ? yield select(state => state.recipes.search.page + 1) : page
    const data = yield call(fetchRecipes, ingredients, query, nextPage);
    if (data.status === 500){
      yield put(actionCreators.getNextPageRecipes(ingredients, query, 101));
    }
    else if (data.results && data.results.length){
      yield put(actionCreators.getRecipesSuccess(data.results, nextPage));
    }
    else if (data.results && !data.results.length){
      yield put(actionCreators.getRecipesSuccess(data.results, nextPage));
    }
    else yield put(actionCreators.getRecipesFailure(data.error));
  } catch (error) {
    yield put(actionCreators.getRecipesFailure(error.response.data.error));
  }
}

function* watchOnLoadRecipes() {
  yield takeEvery(actionTypes.GET_RECIPES, onLoadRecipes);
}

function* watchOnLoadNextPageRecipes() {
  yield takeEvery(actionTypes.GET_NEXT_PAGE_RECIPES, onLoadNextPageRecipes);
}

export default function* recipesSaga() {
  yield all([fork(watchOnLoadRecipes), fork(watchOnLoadNextPageRecipes)]);
}
