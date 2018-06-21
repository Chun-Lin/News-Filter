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
import articleReducer from '../src/store/reducers/newsFilter'
import fetchNewsReducer from './store/reducers/fetchNewsReducer'
import queryStringReducer from './store/reducers/queryStringReducer'

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
  query: queryStringReducer,
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))
