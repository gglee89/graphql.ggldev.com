# graphql.giwoolee.com

## GraphQL + Apollo Server

#### Installation

- `npm i apollo-server graphql`

#### Initial server

```js
// server.js
const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    welcome: String
  }
`;

const resolvers = {
  Query: {
    welcome: () => {
      return "Welcome to the World of GraphQL";
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => console.log(`Server is running at ${url}`));
```

#### Running

`node server.js`

<img width="990" alt="image" src="https://github.com/user-attachments/assets/5a905040-1e58-4674-96da-1460af0faa23">
