import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { setRecipes } from '../../../actions/dataActions'
import { RecipesAction } from '../../../actions/actionsInterfaces'
import { getRecipes } from '../../../actions/dataActions'
import SearchComponent from './SearchComponent'

const mapDispatchToProps = (dispatch: Dispatch<RecipesAction>) => ({
  onSearch: (ingredients: string, query: string, page: number | string) => {
    dispatch(getRecipes(ingredients, query, page))
  },
  onClear: () => {
    dispatch(setRecipes([]))
  },
})

export default connect(null, mapDispatchToProps)(SearchComponent)
