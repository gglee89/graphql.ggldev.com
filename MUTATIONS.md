# GraphQL Mutations

It is like the POST, PUT, and DELETE operations of the RESTful API

### Add mutation

In `schema.js` add the type Mutation

```js
type Mutation {
  addGenre(input: AddGenreInput!): Genre!
}

input AddGenreInput {
  name: String!
}
```

### Create new Mutation.js

- install `npm i uuid`
