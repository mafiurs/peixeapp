import types from "./types";

const INITIAL_STATE = {
 movies: { results: null, list: [] },
 favorites: [],
 notFound: false,
 loading: true,
 error: null,
};

const reducer = (state = INITIAL_STATE, action) => {
 switch (action.type) {
  case types.SET_MOVIES:
   return {
    ...state,
    movies: action.payload,
   };
  case types.SET_LOADING:
   return {
    ...state,
    loading: action.payload,
   };
  case types.SET_ERROR:
   return {
    ...state,
    error: action.payload,
   };
  case types.SET_NOT_FOUND:
   return {
    ...state,
    notFound: action.payload,
   };
  default:
   return state;
 }
};

export default reducer;
