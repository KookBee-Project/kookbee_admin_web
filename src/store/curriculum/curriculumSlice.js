import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";

const initialState = {
  data: [],
  status: "idle",
  curriculumDelStatus: "idle",
  readStatus: "idle",
  error: null,
};

export const createCurriculum = createAsyncThunk(
  "/curriculum/create",
  async (request) => {
    const response = await api("POST", "/class/curriculum", request);
    return response.data;
  }
);
export const updateCurriculum = createAsyncThunk(
  "/curriculum/update",
  async (request) => {
    const response = await api("PUT", "/class/curriculum", request);
    return response.data;
  }
);

export const readCurriculum = createAsyncThunk(
  "/curriculum/read",
  async (bootcampId) => {
    const response = await api("GET", `/class/curriculum/${bootcampId}`);
    console.log(response.data);
    return response.data;
  }
);

export const deleteCurriculum = createAsyncThunk(
  "/curriculum/delete",
  async (curriculumIds) => {
    const response = await api("DELETE", `/class/curriculum`, curriculumIds);
    console.log(response.data);
    return response.data;
  }
);

const curriculumSlice = createSlice({
  name: "curriculum",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(createCurriculum.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(createCurriculum.fulfilled, (state, action) => {
        state.status = "successed";
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
      })
      .addCase(updateCurriculum.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(readCurriculum.pending, (state, action) => {
        state.readStatus = "loading";
      })
      .addCase(readCurriculum.fulfilled, (state, action) => {
        state.readStatus = "successed";
        state.data = action.payload;
      })
      .addCase(readCurriculum.rejected, (state, action) => {
        state.readStatus = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteCurriculum.pending, (state, action) => {
        state.curriculumDelStatus = "loading";
      })
      .addCase(deleteCurriculum.fulfilled, (state, action) => {
        state.curriculumDelStatus = "successed";
      })
      .addCase(deleteCurriculum.rejected, (state, action) => {
        state.curriculumDelStatus = "failed";
        state.error = action.error.message;
      });
  },
});
export default curriculumSlice.reducer;
