import qs from 'query-string'

export const queryStrinify = queryObj => {
  return ['?', qs.stringify(queryObj)].join('')
}
