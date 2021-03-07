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
  return <h2>This is a page for product with ID: {match.params.id} </h2>
}

const App: FunctionComponent = () => (
  <Router>
    <LayoutComponent>
      <Route path="/" exact component={RecipeSearch} />
      <Route path="/products/:id" component={Product} />
    </LayoutComponent>
  </Router>
)

export default App
