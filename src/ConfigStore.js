import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { apiMiddleware } from 'redux-api-middleware'
import createLogger from 'redux-logger'
import rootReducer from './reducers'
import App from './App';

export const configureStore = (initialState) => {
  const middlewares = [apiMiddleware,createLogger]
  const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
  )

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      System.import('./reducers').then(nextRootReducer =>
        store.replaceReducer(nextRootReducer.default)
      )
    })
  }

  return store
}

const store = configureStore({})

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);

