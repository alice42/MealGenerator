import React, { FunctionComponent } from 'react'
import ResultsContainer from './components/feature/Results/ResultsContainer'
import SearchContainer from './components/feature/Search/SearchContainer'
import LayoutComponent from './components/layout/LayoutComponent'
import {
  BrowserRouter as Router,
  Route,
  RouteComponentProps,
} from 'react-router-dom'
import './App.css'
import CreateContainer from './components/feature/Create/CreateContainer'
import AllContainer from './components/feature/All/AllContainer'
import AllComponent from './components/feature/All/AllComponent'

type TParams = { id: string }

function RecipeSearch() {
  return (
    <>
      <SearchContainer />
      <ResultsContainer />
    </>
  )
}

function Product({ match }: RouteComponentProps<TParams>) {
  const A = () =>
    match.params.id === 'create' ? <CreateContainer /> : <AllContainer />
  return <A />
}

const App: FunctionComponent = () => (
  <Router>
    <LayoutComponent>
      <Route path="/" exact component={RecipeSearch} />
      <Route path="/recipes/:id" component={Product} />
    </LayoutComponent>
  </Router>
)

export default App
