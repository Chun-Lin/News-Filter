import { QUERY } from '../actions/actionTypes'
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
    [QUERY]: produce((draft, action) => {
      draft.queryString = { ...draft.queryString, ...action.payload }
    }),
  },
  initState,
)

export default queryStringReducer
