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
  loading: false,
  error: '',
}

const fetchNewsReducer = handleActions(
  {
    [FETCH_NEWS_INIT]: produce(draft => {
      draft.articles = []
      draft.totalResults = 0
      draft.loading = true
    }),
    [FETCH_NEWS_SUCCESS]: produce((draft, { totalResults, articles }) => {
      draft.totalResults = totalResults
      draft['articles'] = [...draft.articles, ...articles]
      draft.loading = false
    }),
    [FETCH_NEWS_FAIL]: produce((draft, { error }) => {
      draft.error = error
      draft.loading = false
    }),
  },
  initState,
)

export default fetchNewsReducer
