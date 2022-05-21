// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`  
  type Book {
    bookId: ID
    authors: String!
    description: String
    title: String
    image: String
    link: String
  }
  
  type User {
    _id: ID
    username: String
    email: String
    bookCounter: Int
    savedBooks: [Book]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me(username: String): User
  }

  input BookContent {
    authors: String
    description: String
    title: String
    media: [MediaDetails]
  }

  input MediaDetails {
    format: MediaFormat!
    link: String!
  }

  enum MediaFormat {
    IMAGE
  }

  type Mutation {
    login(email: String, password: String): Auth
    addUser(username: String, email: String, password: String): Auth
    saveBook(bookId: ID, content: BookContent): User
  }
  
`;

// export the typeDefs
module.exports = typeDefs;