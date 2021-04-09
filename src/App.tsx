import React, { FunctionComponent } from 'react'
import ResultsContainer from './components/feature/Results/ResultsContainer'
import SearchContainer from './components/feature/Search/SearchContainer'
import LayoutComponent from './components/layout/LayoutComponent'
import CreateContainer from './components/feature/Create/CreateContainer'
import AllContainer from './components/feature/All/AllContainer'
import GroceriesContainer from './components/feature/Groceries/GroceriesContainer'
import GeneratorContainer from './components/feature/Generator/GeneratorContainer'
import {
  BrowserRouter as Router,
  Route,
  RouteComponentProps,
} from 'react-router-dom'
import './App.css'

type TParams = { id: string }

const RecipeSearch = () => (
  <>
    <SearchContainer />
    <ResultsContainer />
  </>
)

const Create = () => (
  <>
    <CreateContainer />
  </>
)

const Home = () => (
  <>
    <GeneratorContainer />
    <GroceriesContainer />
  </>
)

const All = () => (
  <>
    <AllContainer />
  </>
)

function RecipesPages({ match }: RouteComponentProps<TParams>) {
  const recipePages: any = {
    search: <RecipeSearch />,
    create: <Create />,
    all: <All />,
  }
  return recipePages[match.params.id]
}

const App: FunctionComponent = () => (
  <Router>
    <LayoutComponent>
      <Route path="/" exact component={Home} />
      <Route path="/recipes/:id" component={RecipesPages} />
    </LayoutComponent>
  </Router>
)

export default App
