import {
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_INIT,
  FETCH_NEWS_FAIL,
} from '../actions/actionTypes'
import { handleActions } from 'redux-actions'
import produce from 'immer'

const initState = {
  articles: [],
  totalResults: 0,
  error: '',
}

const fetchNewsReducer = handleActions(
  {
    [FETCH_NEWS_INIT]: produce(draft => {
      draft.articles = initState.articles
      draft.totalResults = initState.totalResults
      draft.error = initState.error
    }),
    // [FETCH_NEWS_HIDE_LOADING]: produce(draft => {
    //   draft.loading = false
    // }),
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
