import gql from "graphql-tag"

export const GET_ALL_POST = gql`
query {
  comments {
    usersName
    usersComment
  }
}
`

