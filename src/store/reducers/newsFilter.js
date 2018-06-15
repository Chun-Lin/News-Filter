import { FETCH_NEWS_SUCCESS, FETCH_NEWS_INIT } from '../actions/actionTypes'
import { handleActions } from 'redux-actions'

const initState = {
  articles: [],
  totalResults: 0,
}

const reducer = handleActions(
  {
    [FETCH_NEWS_INIT]: state => ({
      ...state,
      articles: [],
      totalResults: 0,
    }),
    [FETCH_NEWS_SUCCESS]: (state, { totalResults, articles }) => ({
      ...state,
      totalResults: totalResults,
      articles: [...state.articles, ...articles],
    }),
  },
  initState,
)

export default reducer
