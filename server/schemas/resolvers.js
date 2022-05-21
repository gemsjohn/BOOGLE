const { User } = require("../models");

const resolvers = {
    Query: {
      me: async (parent, {username}) => {
        const params = username ? { username } : {}
        return User.find().sort({ createdAt: -1 });
      }
    }
  };
  
  module.exports = resolvers;