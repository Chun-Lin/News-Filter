import {
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_INIT,
  QUERY_COUNTRY,
  QUERY_SEARCH,
} from '../actions/actionTypes'
import { handleActions } from 'redux-actions'

const initState = {
  articles: [],
  totalResults: 0,
  queryString: {
    searchTerm: '',
    country: '',
    category: '',
  },
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
    [QUERY_SEARCH]: (state, { searchTerm }) => {
      return {
        ...state,
        queryString: { ...state.queryString, searchTerm: searchTerm },
      }
    },
    [QUERY_COUNTRY]: (state, { country }) => {

      return {
        ...state,
        queryString: { ...state.queryString, country: country },
      }
    },
  },
  initState,
)

export default reducer
