import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL =
  "https://psychologists-service-1a4a6-default-rtdb.asia-southeast1.firebasedatabase.app/";

// axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchAllPsychologies = createAsyncThunk(
  "allPsychologies/fetchAllPsychologies",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/psychologists");

      console.log(response.data);

      return response.data.items;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
