import counter from "./counter";
import isLoggedIn from "./isLoggedIn";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter,
  isLogged:isLoggedIn,
});

export default allReducers; 