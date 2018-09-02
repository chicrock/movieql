import fetch from "node-fetch";
import querystring from "querystring";

const API_URL = "https://yts.am/api/v2/list_movies.json?";

export const getMovies = (limit, rating) => {
  let REQUEST_URL = API_URL;

  let params = {};

  if (limit > 0) {
    params.limit = limit;
  }

  if (rating > 0) {
    params.minimum_rating = rating;
  }

  REQUEST_URL += querystring.stringify(params);

  return fetch(REQUEST_URL)
    .then(response => response.json())
    .then(json => json.data.movies);
};
