import axios from "axios";

/* 
    Set and delete Authorization header for axios request depending
    whether a user is logged in or not
*/
export default (token) => {
  if (token) {
    // Apply authorization token to every request if logged in
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};
