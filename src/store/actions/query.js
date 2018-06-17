import axios from '../../axiosInstance'
import {
  QUERY_COUNTRY,
  QUERY_SEARCH,
  QUERY_CATEGORY
} from './actionTypes'

export const queryCountry = (country) => ({
  type: QUERY_COUNTRY,
  country: country,
})

export const querySearch = (searchTerm) =>({
  type: QUERY_SEARCH,
  searchTerm: searchTerm
})

