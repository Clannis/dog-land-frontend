import { combineReducers } from "redux";
import trainerReducer from "./trainerReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    user: userReducer,
    trainer: trainerReducer
  });
   
  export default rootReducer;