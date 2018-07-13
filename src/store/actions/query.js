import { QUERY } from './actionTypes'

export const query = (key, value) => ({
  type: QUERY,
  payload: { [key]: value },
})
