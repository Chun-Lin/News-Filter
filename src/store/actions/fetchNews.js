import axios from '../../axiosInstance'
import qs from 'query-string'
import { API_KEY } from '../../constants/index'
import {
  FETCH_NEWS_INIT,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAIL,
} from './actionTypes'

export const fetchNewsInit = () => ({
  type: FETCH_NEWS_INIT,
})

export const fetchNewsSuccess = (totalResults, articles) => ({
  type: FETCH_NEWS_SUCCESS,
  totalResults: totalResults,
  articles: articles,
})

export const fetchNewsFail = err => ({
  type: FETCH_NEWS_FAIL,
  error: err,
})

export const fetchNews = () => async (dispatch, getState) => {
  dispatch(fetchNewsInit())

  const { searchTerm, country, category, page } = getState().query.queryString

  console.log(getState().query.queryString)

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
  }
}
