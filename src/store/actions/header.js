import axios from '../../axiosInstance'
import {
  FETCH_NEWS_INIT,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAIL,
} from './actionTypes'
import { API_KEY } from '../../constants/index'

const fetchNewsInit = () => ({
  type: FETCH_NEWS_INIT,
})

const fetchNewsSuccess = (totalResults,articles) => ({
  type: FETCH_NEWS_SUCCESS,
  totalResults: totalResults,
  articles: articles,
})

const fetchNewsFail = err => ({
  type: FETCH_NEWS_FAIL,
  error: err,
})

export const fetchNews = queryString => {
  return dispatch => {
    dispatch(fetchNewsInit())
    axios
      .get(`?apiKey=${API_KEY}&q=${queryString}`)
      .then(res => {
        console.log(res)
        dispatch(fetchNewsSuccess(res.data.totalResults,res.data.articles))
      })
      .catch(err => {
        dispatch(fetchNewsFail(err))
      })
  }
}
