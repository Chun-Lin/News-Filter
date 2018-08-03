import { testSaga, expectSaga } from 'redux-saga-test-plan'
import { fetchNewsSaga, qsSelector } from './fetchNewsRedux'

import axios from '../../axiosInstance'

const queryString = '?apiKey=11dd82e2652347c7a55a29cf55ec25e9&page=1'

const actionTypes = {
  FETCH_NEWS_INIT: 'FETCH_NEWS_INIT',
  FETCH_NEWS_SUCCESS: 'FETCH_NEWS_SUCCESS',
  FETCH_NEWS_FAIL: 'FETCH_NEWS_FAIL',
  FETCH_NEWS: 'FETCH_NEWS',
  QUERY: 'QUERY',
  LOADING_HIDE: 'LOADING_HIDE',
  LOADING_SHOW: 'LOADING_SHOW',
}

describe('fetchNewsSaga Unit Tests', () => {
  it('should fetch news', async () => {
    let saga = testSaga(fetchNewsSaga)
    return saga
      .next()
      .put({ type: actionTypes.FETCH_NEWS_INIT })
      .next()
      .put({ type: actionTypes.LOADING_SHOW })
      .next()
      .select(qsSelector)
      .next({
        searchTerm: '',
        country: '',
        category: '',
        page: 1,
      })
      .call(axios.get, queryString)
      .next({
        data: {
          totalResults: 0,
          articles: {},
        },
      })
      .put({
        type: actionTypes.FETCH_NEWS_SUCCESS,
        totalResults: 0,
        articles: {},
      })
      .next()
      .put({ type: actionTypes.LOADING_HIDE })
      .next()
      .isDone()
  })
})

