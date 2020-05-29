/* 
    A store holds the whole state tree of your application. 
    The only way to change the state inside it is to dispatch an action on it.
    getState()
    dispatch(action)
    subscribe(listener)
    replaceReducer(nextReducer)
*/
import { createStore, applyMiddleware } from "redux";
/* 
    middleware for Redux that allows us to directly access the dispatch method 
    to make asynchronous calls from our actions
*/
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "./reducers";

export default createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
