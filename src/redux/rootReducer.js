import { combineReducers } from "redux";
import moviesList from "../redux/moviesList/reducer";
const rootReducer = combineReducers({ moviesList });

export default rootReducer;
