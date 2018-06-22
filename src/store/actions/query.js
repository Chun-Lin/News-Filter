import {
  QUERY_COUNTRY,
  QUERY_SEARCH,
  QUERY_CATEGORY,
  QUERY_PAGE,
} from './actionTypes'

export const queryCountry = country => ({
  type: QUERY_COUNTRY,
  country: country,
})

export const querySearch = searchTerm => ({
  type: QUERY_SEARCH,
  searchTerm: searchTerm,
})

export const queryCategory = category => ({
  type: QUERY_CATEGORY,
  category: category,
})

export const queryPage = page => ({
  type: QUERY_PAGE,
  page: page,
})
