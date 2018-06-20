import {
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_INIT,
  QUERY_COUNTRY,
  QUERY_SEARCH,
  QUERY_CATEGORY,
  QUERY_PAGE,
  FETCH_NEWS_FAIL,
} from '../actions/actionTypes'
import { handleActions } from 'redux-actions'
import produce from 'immer'

const initState = {
  articles: [],
  totalResults: 0,
  queryString: {
    searchTerm: '',
    country: '',
    category: '',
    page: 1,
  },
  loading: false,
  error: '',
}

// const reducer = handleActions(
//   {
//     [FETCH_NEWS_INIT]: state => ({
//       ...state,
//       articles: [],
//       totalResults: 0,
//       loading: true,
//     }),
//     [FETCH_NEWS_SUCCESS]: (state, { totalResults, articles }) => ({
//       ...state,
//       totalResults: totalResults,
//       articles: [...state.articles, ...articles],
//       loading: false,
//     }),
//     [QUERY_SEARCH]: (state, { searchTerm }) => {
//       return {
//         ...state,
//         queryString: { ...state.queryString, searchTerm: searchTerm },
//       }
//     },
//     [QUERY_COUNTRY]: (state, { country }) => {
//       return {
//         ...state,
//         queryString: { ...state.queryString, country: country },
//       }
//     },
//     [QUERY_CATEGORY]: (state, { category }) => {
//       return {
//         ...state,
//         queryString: { ...state.queryString, category: category },
//       }
//     },
//     [QUERY_PAGE]: (state, { page }) => {
//       return {
//         ...state,
//         queryString: { ...state.queryString, page: page },
//       }
//     },
//   },
//   initState,
// )

const reducer = (state = initState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_NEWS_INIT:
        draft.articles = []
        draft.totalResults = 0
        draft.loading = true
        return
      case FETCH_NEWS_SUCCESS:
        draft.totalResults = action.totalResults
        draft['articles'] = [...draft.articles, ...action.articles]
        draft.loading = false
        return
      case FETCH_NEWS_FAIL:
        draft.error = action.error
        return
      case QUERY_COUNTRY:
        draft.queryString.country = action.country
        return
      case QUERY_CATEGORY:
        draft.queryString.category = action.category
        return
      case QUERY_SEARCH:
        draft.queryString.searchTerm = action.searchTerm
        return
      case QUERY_PAGE:
        draft.queryString.page = action.page
        return
    }
  })

export default reducer
