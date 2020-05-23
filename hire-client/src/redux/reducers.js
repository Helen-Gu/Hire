/* 
    return new state given old state and action
*/
import { combineReducers } from "redux"

function xxx(state = 0, action) {
    return state;
}


function yyy(state = 0, action) {
    return state;
}

/* 
    The resulting reducer calls every child reducer, and gathers their results into a single state object. 
    The state produced by combineReducers() namespaces the states of each reducer under their keys as passed to combineReducers()
*/
export default combineReducers({
    xxx,
    yyy
})
