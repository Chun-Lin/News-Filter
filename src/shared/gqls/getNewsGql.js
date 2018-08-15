import { gql } from 'apollo-boost'

export const getNewsGql = gql`
  query($searchTerm: String!) {
    headlines(q: $searchTerm) @rest(type: "articles", path: ":q") {
      totalResults
      articles
    }
  }
`
