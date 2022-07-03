import { combineReducers } from "redux";
import taskReducer from "./taskReducer";

const rootReducers = combineReducers({
  taskReducer,
});

export default rootReducers;
