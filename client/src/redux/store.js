/* 
    A store holds the whole state tree of your application. 
    The only way to change the state inside it is to dispatch an action on it.
    getState()
    dispatch(action)
    subscribe(listener)
    replaceReducer(nextReducer)
*/
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// a console which set up development environment to 
// visualize actions and state changes that take place in a redux application
import reducers from "./reducers"

export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
