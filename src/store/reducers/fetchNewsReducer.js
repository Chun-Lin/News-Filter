import {
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_INIT,
  FETCH_NEWS_FAIL,
  FETCH_NEWS_HIDE_LOADING,
} from '../actions/actionTypes'
import { handleActions } from 'redux-actions'
import produce from 'immer'

const initState = {
  articles: [],
  totalResults: 0,
  loading: true,
  error: '',
}

const fetchNewsReducer = handleActions(
  {
    [FETCH_NEWS_INIT]: produce(draft => {
      draft = initState
    }),
    [FETCH_NEWS_HIDE_LOADING]: produce((draft, { loading }) => {
      draft.loading = loading
    }),
    [FETCH_NEWS_SUCCESS]: produce((draft, { totalResults, articles }) => {
      draft.totalResults = totalResults
      draft['articles'] = [...draft.articles, ...articles]
    }),
    [FETCH_NEWS_FAIL]: produce((draft, { error }) => {
      draft.error = error
    }),
  },
  initState,
)

export default fetchNewsReducer
