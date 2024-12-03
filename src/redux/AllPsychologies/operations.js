import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL =
  "https://psychologists-service-1a4a6-default-rtdb.asia-southeast1.firebasedatabase.app/";

export const fetchAllPsychologies = createAsyncThunk(
  "fetchPsychologies",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/psychologists");
      return response.data.items;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
