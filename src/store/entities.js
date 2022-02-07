import { combineReducers } from "@reduxjs/toolkit";
import bugReducer from "./entities/bugs";
import authenticationReducer from "./entities/user";

export default combineReducers({
  bugs: bugReducer,
  authentication: authenticationReducer
})