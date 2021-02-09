import { combineReducers } from "redux";
import trainerReducer from "./trainerReducer";
import userReducer from "./userReducer";
import loginStateReducer from './loginStateReducer'

const rootReducer = combineReducers({
    user: userReducer,
    trainer: trainerReducer,
    loggedIn: loginStateReducer
  });
   
  export default rootReducer;