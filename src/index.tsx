import * as React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import configureStore from './store'
import App from './App'

const store = configureStore()
const rootElement = document.getElementById('root')

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
