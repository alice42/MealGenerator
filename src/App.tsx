import React, { FunctionComponent } from 'react'
import ResultsContainer from './components/feature/Results/ResultsContainer'
import SearchContainer from './components/feature/Search/SearchContainer'
import LayoutComponent from './components/layout/LayoutComponent'

import './App.css'

const App: FunctionComponent = () => (
  <LayoutComponent>
    <SearchContainer />
    <ResultsContainer />
  </LayoutComponent>
)

export default App
