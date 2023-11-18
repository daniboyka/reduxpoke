import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  loading: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setLogging: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setLogging } = uiSlice.actions
export default uiSlice.reducer