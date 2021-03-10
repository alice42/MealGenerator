import 'regenerator-runtime/runtime'
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from "./reducers/rootReducer";
import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
  )
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
