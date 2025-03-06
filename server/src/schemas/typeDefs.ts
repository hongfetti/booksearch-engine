import gql from 'graphql-tag';

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        savedBooks: [Book]!
        bookCount: Int!
    }

    type Book {
        bookId: String!
        title: String!
        authors: [String]!
        description: String!
        image: String!
        link: String!
    }

    type Query {
        user: [User]
        getUser(userId: ID!): User
    }
`;

export default typeDefs;