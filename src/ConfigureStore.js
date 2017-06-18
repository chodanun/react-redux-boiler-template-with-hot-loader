import React from 'react'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { apiMiddleware } from 'redux-api-middleware'
import createLogger from 'redux-logger'

import rootReducer from './reducers'

export default (history) => {
  const middlewares = [thunk, apiMiddleware, routerMiddleware(history),createLogger]

  const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
  )

  return store
}