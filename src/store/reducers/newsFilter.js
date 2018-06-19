import {
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_INIT,
  QUERY_COUNTRY,
  QUERY_SEARCH,
  QUERY_CATEGORY,
  QUERY_PAGE,
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
  loading: false,
}

const reducer = handleActions(
  {
    [FETCH_NEWS_INIT]: state => ({
      ...state,
      articles: [],
      totalResults: 0,
      loading: true,
    }),
    [FETCH_NEWS_SUCCESS]: (state, { totalResults, articles }) => ({
      ...state,
      totalResults: totalResults,
      articles: [...state.articles, ...articles],
      loading: false,
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
    [QUERY_CATEGORY]: (state, { category }) => {
      return {
        ...state,
        queryString: { ...state.queryString, category: category },
      }
    },
    [QUERY_PAGE]: (state, { page }) => {
      return {
        ...state,
        queryString: { ...state.queryString, page: page },
      }
    },
  },
  initState,
)

export default reducer
