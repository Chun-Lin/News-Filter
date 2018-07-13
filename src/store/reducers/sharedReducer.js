import { handleActions } from 'redux-actions'
import produce from 'immer'
import { LOADING_SHOW, LOADING_HIDE } from '../actions/actionTypes'

const initState = {
  loading: false,
}

const sharedReducer = handleActions(
  {
    [LOADING_SHOW]: produce(draft => {
      draft.loading = true
    }),
    [LOADING_HIDE]: produce(draft => {
      draft.loading = false
    }),
  },
  initState,
)

export default sharedReducer
