import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const middlewares = [thunk];

const composedEnhancers =
 window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
 rootReducer,
 composedEnhancers(applyMiddleware(...middlewares))
);

export default { store };
