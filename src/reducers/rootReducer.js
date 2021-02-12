import { combineReducers } from "redux";
import trainerReducer from "./trainerReducer";
import userReducer from "./userReducer";
import loginStateReducer from './loginStateReducer'
import dogBreedReducer from "./dogBreedReducer";

const rootReducer = combineReducers({
    user: userReducer,
    trainer: trainerReducer,
    loggedIn: loginStateReducer,
    dogBreeds: dogBreedReducer
  });
   
  export default rootReducer;