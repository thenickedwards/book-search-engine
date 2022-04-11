// ADDED REF: 21.3.26
import { gql } from '@apollo/client';

// [ ] mutations.js:
// [ ] LOGIN_USER will execute the loginUser mutation set up using Apollo Server.
// [ ] ADD_USER will execute the addUser mutation.
// [ ] SAVE_BOOK will execute the saveBook mutation.
// [ ] REMOVE_BOOK will execute the removeBook mutation.

export const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
        loginUser(email: $email, password: $password) {
            token
            user {
                _id
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
            }
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($bookData: savedBook!) {
        saveBook(bookData: $bookData) {
            _id,
            username,
            email,
            bookCount,
            savedBooks, {
                bookId,
                authors,
                description,
                title,
                image,
                link
            }
        }
    }
`;
