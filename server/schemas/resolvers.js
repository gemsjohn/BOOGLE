const { AuthenticationError } = require('apollo-server-express');
const { User } = require("../models");
const bookSchema = require('../models/Book');

const resolvers = {
    Query: {
      me: async (parent, {username}) => {
        const params = username ? { username } : {}
        // return User.find().sort({ createdAt: -1 });
        return User.findOne({ username })
      }
      // me: async (parent, { _id }) => {
      //   return User.findOne({ _id });
      // }
      // books: async (parent, {bookId}) => {
      //   const params = bookId ? { bookId } : {}
      //   return Book.find().sort({ createdAt: -1 });
      // }
    },
    Mutation: {
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });

        if(!user) {
          throw new AuthenticationError('Incorrect credentials');
        }

        const correctPw = await user.isCorrectPassword(password);

        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }

        return user;
      },
      addUser: async (parent, args) => {
        const user = await User.create(args);
        return user;
      }
    }
  };
  
  module.exports = resolvers;