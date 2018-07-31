import axios from '../../axiosInstance'
import { API_KEY } from '../../constants'
import { handleActions } from 'redux-actions'
import produce from 'immer'
import { put, select, takeLatest, fork } from 'redux-saga/effects'
import { loadingShow, loadingHide } from '../shared/sharedRedux'
import { queryStrinify } from '../../shared/utils'

/**
 * ------------ Action ------------
 */
export const actionTypes = {
  FETCH_NEWS_INIT: 'FETCH_NEWS_INIT',
  FETCH_NEWS_SUCCESS: 'FETCH_NEWS_SUCCESS',
  FETCH_NEWS_FAIL: 'FETCH_NEWS_FAIL',
  FETCH_NEWS: 'FETCH_NEWS',
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

export const fetchNews = () => ({
  type: actionTypes.FETCH_NEWS,
})

export const query = (key, value) => ({
  type: actionTypes.QUERY,
  payload: { [key]: value },
})

/**
 * ------------ Side Effects ------------
 */

export function* fetchNewsSaga(action) {
  yield put(fetchNewsInit())
  yield put(loadingShow())

  /* get store data */
  const store = yield select()
  const { searchTerm, country, category, page } = store.fetch.queryString

  /* queryString data */
  const queryObject = {
    apiKey: API_KEY || undefined,
    q: searchTerm || undefined,
    country: country ? country.value.toLowerCase() : undefined,
    category: category || undefined,
    page: page || undefined,
  }

  // const queryStringified = qs.stringify(queryObject)
  // const queryString = ['?', queryStringified].join('')
  const queryString = queryStrinify(queryObject)
  console.log(queryString)

  try {
    const res = yield axios.get(queryString)
    yield put(fetchNewsSuccess(res.data.totalResults, res.data.articles))
  } catch (err) {
    yield put(fetchNewsFail(err.message))
  } finally {
    yield put(loadingHide())
  }
}

/**
 * ------------ Saga Effects ------------
 */
export function* watchFetchNews() {
  yield fork(takeLatest, actionTypes.FETCH_NEWS, fetchNewsSaga)
}
