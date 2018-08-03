import { handleActions } from 'redux-actions'
import produce from 'immer'

/**
 * ------------ Action ------------
 */

export const actionTypes = {
  LOADING_HIDE: 'LOADING_HIDE',
  LOADING_SHOW: 'LOADING_SHOW',
}

/**
 * ------------ Reducers ------------
 */
export const sharedInitState = {
  loading: false,
}

const sharedReducer = handleActions(
  {
    [actionTypes.LOADING_SHOW]: produce(draft => {
      draft.loading = true
    }),
    [actionTypes.LOADING_HIDE]: produce(draft => {
      draft.loading = false
    }),
  },
  sharedInitState,
)

export default sharedReducer

/**
 * ------------ Action Creators ------------
 */
export const loadingShow = () => ({
  type: actionTypes.LOADING_SHOW,
})

export const loadingHide = () => ({
  type: actionTypes.LOADING_HIDE,
})
