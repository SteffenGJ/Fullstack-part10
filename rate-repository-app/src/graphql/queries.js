import { gql } from "@apollo/client";

export const ALL_REPOSITORIES = gql`
query Repositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection) {
  repositories(orderBy: $orderBy, orderDirection: $orderDirection) {
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

export const SINGLE_REP = gql`
query Repository($repositoryId: ID!, $first: Int, $after: String) {
  repository(id: $repositoryId) {
    id
    fullName
    description
    url
    language
    forksCount
    stargazersCount
    ratingAverage
    reviewCount
    ownerAvatarUrl
    reviews(first: $first, after: $after) {
      edges {
        node {
          text
          id
          rating
          createdAt
          user {
            id
            username
          }
        }
        cursor
      }
      pageInfo {
        startCursor
        endCursor
        hasNextPage
      }
    }
  }
}
`

export const CREATE_REVIEW = gql`
mutation Mutation($review: CreateReviewInput) {
  createReview(review: $review) {
    id
    repository {
      id
    }
  }
}
`

export const SIGN_UP = gql`
mutation Mutation($user: CreateUserInput) {
  createUser(user: $user) {
    id
    username
  }
}
`

export const GET_REPOSITORIES = gql`
query Repositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $first: Int, $after: String) {
  repositories(orderBy: $orderBy, orderDirection: $orderDirection, first: $first, after: $after) {
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
      cursor
    }
    pageInfo {
      endCursor
      startCursor
      hasNextPage
    }
    totalCount
  }
}
`
export const MY_REVIEWS = gql`
query Me {
  me {
    reviews {
      edges {
        node {
          text
          id
          rating
          createdAt
          user {
            id
            username
          }
          repository {
            id
            fullName
          }
        }
      }
    }
  }
}
`

export const DELETE_REPOSITORY = gql`
mutation Mutation($deleteReviewId: ID!) {
  deleteReview(id: $deleteReviewId)
}
`