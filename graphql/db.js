export const people = [
  {
    id: 1,
    name: "Nicolas",
    age: 18,
    genger: "male",
  },
  {
    id: 2,
    name: "Chic",
    age: 32,
    genger: "female",
  },
  {
    id: 3,
    name: "Jisu",
    age: 23,
    genger: "female",
  },
  {
    id: 4,
    name: "Sujin",
    age: 19,
    genger: "female",
  },
  {
    id: 5,
    name: "Chicrock",
    age: 11,
    genger: "male",
  },
];

export const getById = id => {
  const filterdPeople = people.filter(person => person.id === id);

  return filterdPeople[0];
};
