// ADDED REF: 21.3.26
import { gql } from '@apollo/client';

// [ ] mutations.js:
// [ ] LOGIN_USER will execute the loginUser mutation set up using Apollo Server.
// [ ] ADD_USER will execute the addUser mutation.
// [ ] SAVE_BOOK will execute the saveBook mutation.
// [ ] REMOVE_BOOK will execute the removeBook mutation.

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
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
