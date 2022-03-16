import { configureStore } from "@reduxjs/toolkit";
import analysisReducer from "./analysisStore/reducer";

export default configureStore({
  reducer: { analysis: analysisReducer },
});
