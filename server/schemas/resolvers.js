const { User } = require('../models');

const resolvers = {
  Query: {
    me: async () => {

    },
  },
  Mutation: {
    login: async (parent, args, context) => {

    },
    addUser: async (parent, args) => {
      const user = await User.create(args);
      if (!user) {
        return
      }
      const token = signToken(user);
      return ({ token, user });
    },
    saveBook: async (parent, args) => {

    },
    removeBook: async (parent, args) => {

    },
  },
};

module.exports = resolvers;
