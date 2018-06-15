import { FETCH_NEWS_SUCCESS, FETCH_NEWS_INIT } from '../actions/actionTypes'
import { handleActions } from 'redux-actions'

const initState = {
  articles: [],
}

const reducer = handleActions(
  {
    [FETCH_NEWS_INIT]: (state) => ({
      ...state,
      articles: [],
    }),
    [FETCH_NEWS_SUCCESS]: (state, { articles }) => ({
      ...state,
      articles: [...state.articles, ...articles],
    }),
  },
  initState,
)

export default reducer