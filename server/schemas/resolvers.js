const { User } = require("../models");

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
      addUser: async (parent, args) => {
        const me = await User.create(args);
        return me;
      }
    }
  };
  
  module.exports = resolvers;