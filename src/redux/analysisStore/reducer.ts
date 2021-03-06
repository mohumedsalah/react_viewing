import { State } from "./dto";

import { createSlice } from "@reduxjs/toolkit";

const initialState: State = {
  camp: "",
  country: "",
  school: "",
  viewedData: {},
};

export const counterSlice = createSlice({
  name: "analysisPage",
  initialState,
  reducers: {
    setCountry: (state, action) => {
      const payload = action.payload;
      state.country = payload;
    },
    setCamp: (state, action) => {
      const payload = action.payload;
      state.camp = payload;
    },
    setSchool: (state, action) => {
      const payload = action.payload;
      state.school = payload;
    },
    changeViewAnalysis: (state: any, action) => {
      const payload = action.payload;
      state.viewedData[payload.schoolName] = {
        view: payload.view,
        color: payload.color,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCamp, setCountry, setSchool, changeViewAnalysis } =
  counterSlice.actions;

export default counterSlice.reducer;
