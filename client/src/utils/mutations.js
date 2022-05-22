import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
            _id
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation AddUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
            _id
            }
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation SaveBook($bookId: ID!, $content: BookContent) {
        saveBook(bookId: $bookId, content: $content) {
            _id
            username
            email
            bookCounter
            savedBooks {
            authors
            description
            title
            image
            link
            }
        }
    }
`;

// REMOVE_BOOK