# movieql

Movie API with Graphql

## Install

### babel-node

```bash
]$ yarn global add babel-cli --ignore-engines
]$ yarn add babel-cli babel-preset-env babel-preset-stage-3 --dev
```

### graphql-yoga

```bash
# https://github.com/prisma/graphql-yoga
]$ yarn add graphql-yoga
```

### nodemon

```bash
]$ yarn global add nodemon
```

### node-fetch

```bash
]$ yarn add node-fetch
```

## Config

### packages.json

```json
  "scripts": {
    "start": "nodemon --exec babel-node index.js"
  }
```

### .babelrc

```json
{
  "presets": ["env", "stage-3"]
}
```

## Problems solved by GraphQL

```bash
# Over-fetching : Get all data that is not use.
# Under-fetching : Get not enough data. Request many times. Need to call many times to complete resource.

Can ask infomation what you want
```

## schema

### resolvers.js

```js
// Resolve the Query(Nodejs do something to functionality)
const resolvers = {
  Query: {
    name: () => "nicolas",
  },
};
```

### Query

```js
type Query {
  // use ! when is required
  name: String!
}
```

### Mutation

```js
  type Mutation {
    addMovie(name: String!, score: Int!): Movie!
  }
```

### Movie Rest Api

- [YTS.am](https://yts.am/api)
- [List url on YTS.am](https://yts.am/api/v2/list_movies.json)
