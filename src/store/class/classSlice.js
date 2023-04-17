import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const createClass = createAsyncThunk(
  "/class/create",
  async (request) => {
    const response = await api("POST", "/class", request);
    return response.data;
  }
);
export const updateClass = createAsyncThunk(
  "/class/update",
  async (request) => {
    const response = await api("PUT", "/class", request);
    return response.data;
  }
);
export const updateClassStatus = createAsyncThunk(
  "/class/status/update",
  async (request) => {
    const response = await api("PUT", "/class/status", request);
    return response.data;
  }
);

const classSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(createClass.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(createClass.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = action.payload;
      })
      .addCase(createClass.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateClass.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(updateClass.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = action.payload;
      })
      .addCase(updateClass.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateClassStatus.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(updateClassStatus.fulfilled, (state, action) => {
        state.status = "successed";
      })
      .addCase(updateClassStatus.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export default classSlice.reducer;
