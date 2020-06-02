/* 
  createStore() creates a Redux store that holds the complete state tree of your app.
  There should only be a single store in your app
  store sends application state to React components, which will react accordingly to that state
*/
import { createStore, applyMiddleware } from "redux";
/* 
    middleware for Redux that allows us to directly access the dispatch method 
    to make asynchronous calls from our actions
*/
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers";

const initialState = {};
const middleware = [thunk];
export default createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
