import axios from "axios";
import types from "./types";
import keys from "../../config/keys";
const serviceEndpoint = process.env.REACT_APP_OMDBAPI_ENDPOINT;

const fetchMovies = (payload) => {
 return async (dispatch) => {
  try {
   const { data } = await axios.get(
    `${serviceEndpoint}?apikey=${keys.omdbapiKey}&s=${payload}`
   );
   if (data.Response === "False") return dispatch(setNotFound(true));
   dispatch(setMovies({ results: data.totalResults, list: data.Search }));
   console.log(data.Search);
  } catch (err) {
   dispatch(setError(err));
  } finally {
   dispatch(setLoading(false));
  }
 };
};

const setMovies = (payload) => ({
 type: types.SET_MOVIES,
 payload,
});

const setFavoriteMovie = (payload) => ({
 type: types.SET_FAVORITE_MOVIE,
 payload,
});
const setLoading = (payload) => ({
 type: types.SET_LOADING,
 payload,
});
const setError = (payload) => ({
 type: types.SET_ERROR,
 payload,
});
const setNotFound = (payload) => ({
 type: types.SET_NOT_FOUND,
 payload,
});

export default {
 fetchMovies,
 setFavoriteMovie,
 setMovies,
 setLoading,
 setError,
 setNotFound,
};
