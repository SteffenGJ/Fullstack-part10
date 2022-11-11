import { gql } from "@apollo/client";

export const ALL_REPOSITORIES = gql`
query Repositories {
    repositories {
      edges {
        node {
          id
          fullName
          description
          language
          forksCount
          stargazersCount
          ratingAverage
          reviewCount
          ownerAvatarUrl
        }
      }
    }
  }
`

export const SIGN_IN = gql`
mutation Mutation($credentials: AuthenticateInput) {
  authenticate(credentials: $credentials) {
    accessToken
    expiresAt
    user {
      id
      username
    }
  }
}
`

export const ME = gql`
query Me {
  me {
    id
    username
  }
}
`
