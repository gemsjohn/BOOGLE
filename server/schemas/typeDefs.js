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
    savedBooks: Book!
  }

  type Query {
    me: [User]
  }
`;

// export the typeDefs
module.exports = typeDefs;