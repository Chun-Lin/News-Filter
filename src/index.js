import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import './index.css'
import App from './App'

import fontawesome from '@fortawesome/fontawesome'
import {
  faSearch,
  faMapMarkerAlt,
  faCalendarAlt,
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from '@fortawesome/fontawesome-free-solid'
import fetchNewsReducer, {
  watchFetchNews,
} from './features/fetchNews/fetchNewsRedux'
import sharedReducer from './features/shared/sharedRedux'

let icons = null
icons = [
  faSearch,
  faMapMarkerAlt,
  faCalendarAlt,
  faAngleDoubleLeft,
  faAngleDoubleRight,
]

/* fontawesome icons */
fontawesome.library.add(...icons)

/* Redux-DevTools */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

/* Reducers */
const rootReducer = combineReducers({
  fetch: fetchNewsReducer,
  shared: sharedReducer,
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  undefined,
  composeEnhancers(applyMiddleware(thunk, sagaMiddleware)),
)

sagaMiddleware.run(watchFetchNews)

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))
