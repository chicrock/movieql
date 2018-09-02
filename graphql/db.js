import fetch from "node-fetch";

const API_URL = "https://yts.am/api/v2/list_movies.json";

export const getMovies = async (limit, rating) => {
  return await fetch(`${API_URL}`)
    .then(response => response.json())
    .then(json => json.data.movies);
};
