import { GraphQLServer } from "graphql-yoga";

const server = new GraphQLServer({
  /// Some configuration
});

server.start(() => console.log("Graphql Server Running"));
