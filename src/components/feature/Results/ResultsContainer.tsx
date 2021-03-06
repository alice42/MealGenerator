import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { AppState } from '../../../reducers/rootReducer'
import RecipesComponent from './ResultsComponent'
import * as actionTypes from '../../../actions/actionsInterfaces'
import * as actions from '../../../actions/dataActions'

const mapDispatchToProps = (dispatch: Dispatch<actionTypes.RecipesAction>) => ({
  onSearch: (ingredients: string, query: string, page: number | string) => {
    dispatch(actions.getRecipes(ingredients, query, page))
  },
  onClear: () => {
    dispatch(actions.setRecipes([]))
  },
  onLoadNextPageRecipe: (ingredients: string, query: string) => {
    dispatch(actions.getNextPageRecipes(ingredients, query))
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
