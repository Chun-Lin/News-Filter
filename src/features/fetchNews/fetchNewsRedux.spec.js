import { put, select } from 'redux-saga/effects'
import { expectSaga, testSaga } from 'redux-saga-test-plan'

import fetchNewsReducer from './fetchNewsRedux'
import sharedReducer from '../shared/sharedRedux'
import axios from '../../axiosInstance'
import { fetchNewsSaga, qsSelector } from './fetchNewsRedux'
import { client } from './fetchNewsRedux'
import { getArticles, queryStrinify } from '../../shared/utils'
import { API_KEY } from '../../shared/constants'
import { getNewsGql } from '../../shared/gqls'

const queryString = queryStrinify({
  apiKey: API_KEY || undefined,
  q: '',
  country: undefined,
  category: undefined,
  page: 1,
})

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
      .next(queryString)
      .call(getArticles, getNewsGql, queryString)
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

function* fetchNewsInit() {
  yield put({ type: actionTypes.FETCH_NEWS_INIT })
}

function* loadingShow() {
  yield put({ type: actionTypes.LOADING_SHOW })
}

function* fetchNewsSuccess() {
  yield put({
    type: actionTypes.FETCH_NEWS_SUCCESS,
    totalResults: 0,
    articles: [],
  })
}

function* fetchNewsFail() {
  yield put({
    type: actionTypes.FETCH_NEWS_FAIL,
    error: 'FAILED',
  })
}

function* loadingHide() {
  yield put({ type: actionTypes.LOADING_HIDE })
}

describe('fetchNewsSaga reducer integration tests', () => {
  it('should initial articles, totalResults, and error', async () => {
    return expectSaga(fetchNewsInit)
      .withReducer(fetchNewsReducer)
      .hasFinalState({
        articles: [],
        totalResults: 0,
        error: '',
        queryString: {
          searchTerm: '',
          country: '',
          category: '',
          page: 1,
        },
      })
      .run()
  })

  it('should show loading', async () => {
    return expectSaga(loadingShow)
      .withReducer(sharedReducer)
      .hasFinalState({
        loading: true,
      })
  })

  it('should update store data correctly when response successfully', async () => {
    return expectSaga(fetchNewsSuccess)
      .withReducer(fetchNewsReducer)
      .hasFinalState({
        articles: [],
        totalResults: 0,
        error: '',
        queryString: {
          searchTerm: '',
          country: '',
          category: '',
          page: 1,
        },
      })
  })

  it('should update store data correctly when response fail', async () => {
    return expectSaga(fetchNewsFail)
      .withReducer(fetchNewsReducer)
      .hasFinalState({
        articles: [],
        totalResults: 0,
        error: 'FAILED',
        queryString: {
          searchTerm: '',
          country: '',
          category: '',
          page: 1,
        },
      })
  })

  it('should hide loading', async () => {
    return expectSaga(loadingHide)
      .withReducer(sharedReducer)
      .hasFinalState({
        loading: false,
      })
  })
})
