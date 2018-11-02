import gql from 'graphql-tag'

// language=GraphQL
export const User = gql `
  query {
    user {
      id
      firstname
      lastname
      email
      type
    }
  }`
