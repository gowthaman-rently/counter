import { combineReducers } from "redux";
import counterReducer from "./counter";

const allreducers = combineReducers({
    counter : counterReducer
});

export default allreducers;