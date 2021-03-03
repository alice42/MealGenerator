import { put, call, takeEvery, all, fork, select } from "redux-saga/effects";

import { fetchRecipes } from "../services/dataServices";
import * as actionCreators from "../actions/dataActions";
import * as actionTypes from "../actions/actionsInterfaces";

function* onLoadRecipes({ ingredients, query, page }: actionTypes.GetRecipesAction) {
  try {
    yield put(actionCreators.getRecipesRequest());
    const data = yield call(fetchRecipes, ingredients, query, page);
    yield put(actionCreators.getRecipesSuccess(data, 1));
  } catch (error) {
    yield put(actionCreators.getRecipesFailure(error.response.data.error));
  }
}

function* onLoadNextPageRecipes({ ingredients, query }: actionTypes.GetRecipesAction) {
  try {
    const nextPage = yield select(state => state.recipes.search.page + 1)
    const data = yield call(fetchRecipes, ingredients, query, nextPage);
    yield put(actionCreators.getRecipesSuccess(data, nextPage));
  } catch (error) {
    yield put(actionCreators.getRecipesFailure(error.response.data.error));
  }
}

function* watchOnLoadRecipes() {
  yield takeEvery(actionTypes.GET_RECIPES, onLoadRecipes);
}

function* watchonLoadNextPageRecipes() {
  yield takeEvery(actionTypes.GET_NEXT_PAGE_RECIPES, onLoadNextPageRecipes);
}

export default function* recipesSaga() {
  yield all([fork(watchOnLoadRecipes), fork(watchonLoadNextPageRecipes)]);
}
