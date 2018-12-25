import { makeExecutableSchema } from 'graphql-tools'

const users: any[] = [
  {
    id: 1,
    name: 'Jon',
    email: 'jon@email.com'
  },
  {
    id: 2,
    name: 'Patrick',
    email: 'Patrick@email.com'
  }
]

const typeDefs = `
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    allUsers: [User!]!
  }

  type Mutation {
    createUSer(name: String!, email: String!): User
  }
`;

const resolvers = {
  // RESOLVER TRIVIAL
  // User: {
  //   id: (user) =>  user.id,
  //   name: (user) =>  user,
  //   email: (user) =>  user.email,
  // },
  Query: {
    allUsers: () => users
  },
  Mutation: {
    createUSer: (parent, args) => {
      const newUser = Object.assign({id: users.length + 1}, args);
      users.push(newUser);
      return newUser;
    }
  }
};

export default makeExecutableSchema({ typeDefs, resolvers });

