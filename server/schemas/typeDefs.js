// REF: Demo 1
const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        _id: ID!
        username: String!
        email: String!
        savedBooks: [Book]
        bookCount: Int
    }

    type Book {
        bookId: ID!
        authors: [String]
        description: String!
        image: String
        link: String
        title: String!
    }

    type Auth {
        token: ID!
        user: User
    }

    input savedBook {
        bookId: String!
        authors: [String]
        description: String!
        image: String
        link: String
        title: String!
    }

    type Query {
        me: User
    }

    type Mutation {
        loginUser(email: String!, password: String!) : Auth 
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(bookData: savedBook!): User
        removeBook(bookId: ID!): User
    }
`;

module.exports = typeDefs