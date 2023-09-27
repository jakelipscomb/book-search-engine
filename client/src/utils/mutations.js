import { gql } from '@apollo/client';

export const ADD_THOUGHT = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        bookCount
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        bookCount
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($authors: String!, $description: String!, $bookid: ID!, $image: String!, $link: String!, $title: String!) {
    addBook(authors: $authors, description: $description, bookid: $bookid, image: $image, link: $link, title: $title) {
      _id
      username
      email
      bookCount
      }
  }
`;