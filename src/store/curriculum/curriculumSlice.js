import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const createCurriculum = createAsyncThunk(
  "/curriculum/create",
  async (request) => {
    const response = await api("POST", "/curriculum", request);
    return response.data;
  }
);
export const updateCurriculum = createAsyncThunk(
  "/curriculum/update",
  async (request) => {
    const response = await api("PUT", "/curriculum", request);
    return response.data;
  }
);

export const readCurriculum = createAsyncThunk(
  "/curriculum/read",
  async (classId) => {
    const response = await api("GET", `/curriculum/${classId}`);
    return response.data;
  }
);

const curriculumSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(createCurriculum.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(createCurriculum.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = action.payload;
      })
      .addCase(createCurriculum.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateCurriculum.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(updateCurriculum.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = action.payload;
      })
      .addCase(updateCurriculum.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(readCurriculum.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(readCurriculum.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = action.payload;
      })
      .addCase(readCurriculum.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export default curriculumSlice.reducer;
