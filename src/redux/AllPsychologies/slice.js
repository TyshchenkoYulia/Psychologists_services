import { createSlice } from "@reduxjs/toolkit";
import { fetchAllPsychologies } from "./operations";

const psychologiesSlice = createSlice({
  name: "allPsychologies",
  initialState: {
    items: [],
    loading: false,
    error: false,
  },
  reducers: {
    activateLoader(state, action) {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPsychologies.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchAllPsychologies.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchAllPsychologies.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const { activateLoader } = psychologiesSlice.actions;

export const allPsychologiesReducer = psychologiesSlice.reducer;
