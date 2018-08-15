import { InMemoryCache, ApolloClient, gql, ApolloLink } from 'apollo-boost'
import { RestLink } from 'apollo-link-rest'
import { BASE_URL } from '../constants'

const restLink = new RestLink({
  uri: BASE_URL,
})

const client = new ApolloClient({
  link: ApolloLink.from([restLink]),
  cache: new InMemoryCache(),
})

export const getArticles = (gql, searchTerm) => {
  return client.query({ query: gql, variables: { searchTerm: searchTerm } })
}
