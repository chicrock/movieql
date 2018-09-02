const nicolas = {
  name: "Nicolas",
  age: 18,
  genger: "male",
};

const resolvers = {
  Query: {
    people: () => nicolas,
  },
};

export default resolvers;
