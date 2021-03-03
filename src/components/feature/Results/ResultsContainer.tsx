import { connect } from 'react-redux'

import { AppState } from '../../../reducers/rootReducer'
import * as actionTypes from '../../../actions/actionsInterfaces'
import RecipesComponent from './ResultsComponent'
import { Dispatch } from 'redux'

import { RecipesAction } from '../../../actions/actionsInterfaces'
import {
  setRecipes,
  getRecipes,
  getNextPageRecipes,
} from '../../../actions/dataActions'

const mapDispatchToProps = (dispatch: Dispatch<RecipesAction>) => ({
  onSearch: (ingredients: string, query: string, page: number | string) => {
    dispatch(getRecipes(ingredients, query, page))
  },
  onClear: () => {
    dispatch(setRecipes([]))
  },
  onLoadNextPageRecipe: (ingredients: string, query: string) => {
    dispatch(getNextPageRecipes(ingredients, query))
  },
})

const mapStateToProps = (state: AppState) => {
  return {
    recipes: state.recipes.recipes,
    hasMore: state.recipes.hasMore,
    search: {
      ingredients: state.recipes.search.ingredients,
      query: state.recipes.search.query,
      page: state.recipes.search.page,
    },
    isLoading: state.isLoading[actionTypes.GET_RECIPES],
    error: state.error[actionTypes.GET_RECIPES],
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesComponent)

// import { connect } from 'react-redux'

// import { AppState } from '../../../reducers/rootReducer'
// import * as actionTypes from '../../../actions/actionsInterfaces'
// import RecipesComponent from './ResultsComponent'
// import { Dispatch } from 'redux'

// import { RecipesAction } from '../../../actions/actionsInterfaces'
// import { getNextPageRecipes } from '../../../actions/dataActions'

// const mapDispatchToProps = (dispatch: Dispatch<RecipesAction>) => ({
//   onLoadNextPageRecipe: (
//     ingredients: string,
//     query: string,
//     page: number | string
//   ) => {
//     dispatch(getNextPageRecipes(ingredients, query, page))
//   },
// })

// const mapStateToProps = (state: AppState) => {
//   return {
//     recipes: state.recipes.recipes,
//     hasMore: state.recipes.hasMore,
//     search: {
//       ingredients: state.recipes.search.ingredients,
//       query: state.recipes.search.query,
//     },
//     isLoading: state.isLoading[actionTypes.GET_RECIPES],
//     error: state.error[actionTypes.GET_RECIPES],
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(RecipesComponent)
