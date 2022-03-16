import { combineReducers } from "redux";
import { ExampleReducer } from "./exampleStore";

const rootReducer = combineReducers({
  example: ExampleReducer,
});

export default rootReducer;
