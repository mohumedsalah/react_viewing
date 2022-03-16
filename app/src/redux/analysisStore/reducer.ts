import { State } from "./dto";

import { createSlice } from "@reduxjs/toolkit";

const initialState: State = {
  camp: "",
  country: "",
  school: "",
  viewedData: [[]],
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
  },
});

// Action creators are generated for each case reducer function
export const { setCamp, setCountry, setSchool } = counterSlice.actions;

export default counterSlice.reducer;
