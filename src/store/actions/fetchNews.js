import axios from '../../axiosInstance'
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

export const fetchNews = () => {
  return (dispatch, getState) => {
    dispatch(fetchNewsInit())

    const { queryString } = getState()
    console.log(getState())

    let countryValue = ''
    queryString.country.value
      ? (countryValue = queryString.country.value.toLowerCase())
      : (countryValue = '')
    axios
      .get(
        `?apiKey=${API_KEY}&q=${
          queryString.searchTerm
        }&country=${countryValue}&category=${queryString.category}&page=${
          queryString.page
        }`,
      )
      .then(res => {
        console.log(res)
        dispatch(fetchNewsSuccess(res.data.totalResults, res.data.articles))
      })
      .catch(err => {
        dispatch(fetchNewsFail(err))
      })
  }
}
