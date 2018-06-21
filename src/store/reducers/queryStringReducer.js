import {
  QUERY_COUNTRY,
  QUERY_SEARCH,
  QUERY_CATEGORY,
  QUERY_PAGE,
} from '../actions/actionTypes'
import { handleActions } from 'redux-actions'
import produce from 'immer'

const initState = {
  queryString: {
    searchTerm: '',
    country: '',
    category: '',
    page: 1,
  },
}

const queryStringReducer = handleActions(
  {
    [QUERY_SEARCH]: produce((draft, { searchTerm }) => {
      draft.queryString.searchTerm = searchTerm
    }),
    [QUERY_COUNTRY]: produce((draft, { country }) => {
      draft.queryString.country = country
    }),
    [QUERY_CATEGORY]: produce((draft, { category }) => {
      draft.queryString.category = category
    }),
    [QUERY_PAGE]: produce((draft, { page }) => {
      draft.queryString.page = page
    }),
  },
  initState,
)

export default queryStringReducer
