import { gql } from '@apollo/client';

export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      books {
        bookId
        authors
        description
        image
        link
        title
      }
    }
  }
`;