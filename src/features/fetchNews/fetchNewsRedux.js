import axios from '../../axiosInstance'
import qs from 'query-string'
import { API_KEY } from '../../constants'
import { handleActions } from 'redux-actions'
import produce from 'immer'
import { loadingShow, loadingHide } from '../shared/sharedRedux.js'

/**
 * ------------ Action ------------
 */
export const actionTypes = {
  FETCH_NEWS_INIT: 'FETCH_NEWS_INIT',
  FETCH_NEWS_SUCCESS: 'FETCH_NEWS_SUCCESS',
  FETCH_NEWS_FAIL: 'FETCH_NEWS_FAIL',
  QUERY: 'QUERY',
}

/**
 * ------------ Reducers ------------
 */
const initState = {
  articles: [],
  totalResults: 0,
  error: '',
  queryString: {
    searchTerm: '',
    country: '',
    category: '',
    page: 1,
  },
}

export default handleActions(
  {
    [actionTypes.FETCH_NEWS_INIT]: produce(draft => {
      draft.articles = initState.articles
      draft.totalResults = initState.totalResults
      draft.error = initState.error
    }),
    [actionTypes.FETCH_NEWS_SUCCESS]: produce(
      (draft, { totalResults, articles }) => {
        draft.totalResults = totalResults
        draft['articles'] = [...draft.articles, ...articles]
      },
    ),
    [actionTypes.FETCH_NEWS_FAIL]: produce((draft, { error }) => {
      draft.error = error
    }),
    [actionTypes.QUERY]: produce((draft, action) => {
      draft.queryString = { ...draft.queryString, ...action.payload }
    }),
  },
  initState,
)

/**
 * ------------ Action Creators ------------
 */
export const fetchNewsInit = () => ({
  type: actionTypes.FETCH_NEWS_INIT,
})

export const fetchNewsSuccess = (totalResults, articles) => ({
  type: actionTypes.FETCH_NEWS_SUCCESS,
  totalResults: totalResults,
  articles: articles,
})

export const fetchNewsFail = err => ({
  type: actionTypes.FETCH_NEWS_FAIL,
  error: err,
})

export const query = (key, value) => ({
  type: actionTypes.QUERY,
  payload: { [key]: value },
})

/**
 * ------------ Side Effects ------------
 */
export const fetchNews = () => async (dispatch, getState) => {
  dispatch(fetchNewsInit())
  dispatch(loadingShow())
  const { searchTerm, country, category, page } = getState().fetch.queryString

  const queryObject = {
    apiKey: API_KEY || undefined,
    q: searchTerm || undefined,
    country: country ? country.value.toLowerCase() : undefined,
    category: category || undefined,
    page: page || undefined,
  }

  const queryStringified = qs.stringify(queryObject)
  const queryString = ['?', queryStringified].join('')

  console.log(queryString)
  try {
    const res = await axios.get(queryString)
    dispatch(fetchNewsSuccess(res.data.totalResults, res.data.articles))
  } catch (err) {
    dispatch(fetchNewsFail(err.message))
  } finally {
    dispatch(loadingHide())
  }
}
