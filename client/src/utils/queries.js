import { gql } from '@apollo/client';

export const GET_ME = gql`
    {
        me {
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