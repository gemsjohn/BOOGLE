import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
            _id
            username
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
            username
            }
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation SaveBook($bookId: String!, $authors: [String], $description: String, $title: String) {
        saveBook(bookId: $bookId, authors: $authors, description: $description, title: $title) {
            _id
            username
            email
            bookCounter
            savedBooks {
                bookId
                authors
                description
                title
                image
                link
            }
        }
        }
`;

export const REMOVE_BOOK = gql`
    mutation RemoveBookId($bookId: String!) {
        removeBookId(bookId: $bookId) {
            _id
            username
            email
            bookCounter
            savedBooks {
                bookId
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