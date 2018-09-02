import { people, getById } from "./db";

const resolvers = {
  Query: {
    people: () => people,
    person: id => getById(id),
  },
};

export default resolvers;
