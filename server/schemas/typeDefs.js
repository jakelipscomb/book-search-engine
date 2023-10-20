const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    books: [String]!
  }

  type Book {
    _id: ID
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    me: User
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addBook(userId: ID!, book: String!): User
    removeBook(book: String!): User
  }
`;

module.exports = typeDefs;
