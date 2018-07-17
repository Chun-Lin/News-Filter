import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
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
import fetchNewsReducer from './features/fetchNews/fetchNewsRedux'
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

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))
