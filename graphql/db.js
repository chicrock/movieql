let movies = [
  {
    id: 1,
    name: "Nicolas",
    score: 10,
  },
  {
    id: 2,
    name: "Chic",
    score: 12,
  },
  {
    id: 3,
    name: "Jisu",
    score: 55,
  },
  {
    id: 4,
    name: "Sujin",
    score: 18,
  },
  {
    id: 5,
    name: "Chicrock",
    score: 99,
  },
];

export const getMovies = () => movies;

export const getById = id => {
  const filterMovie = movies.filter(movie => movie.id === id);

  return filterMovie[0];
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: movies.length + 1,
    name,
    score,
  };

  movies.push(newMovie);
  return newMovie;
};

export const deleteMovie = id => {
  const cleanedMovie = movies.filter(movie => movie.id !== id);

  if (movies.length > cleanedMovie.length) {
    movies = cleanedMovie;
    return true;
  } else {
    return false;
  }
};
