import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";

const initialState = {
  data: [],
  detailData: [],
  status: "idle",
  detailStatus: "idle",
  error: null,
  //
};
export const getSubmitProjectList = createAsyncThunk(
  "/project/list",
  async (bootcampId) => {
    const response = await api(
      "GET",
      `/portfolio/project/submit/list/${bootcampId}`
    );
    return response.data;
  }
);

export const getProjectDetail = createAsyncThunk(
  "/project/detail",
  async (projectId) => {
    const response = await api("GET", `/portfolio/project/detail/${projectId}`);
    return response.data;
  }
);

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducer: {},
  extraReducers(builder) {
    builder
      .addCase(getSubmitProjectList.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getSubmitProjectList.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = action.payload;
      })
      .addCase(getSubmitProjectList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getProjectDetail.pending, (state, action) => {
        state.detailStatus = "loading";
      })
      .addCase(getProjectDetail.fulfilled, (state, action) => {
        state.detailStatus = "successed";
        state.detailData = action.payload;
      })
      .addCase(getProjectDetail.rejected, (state, action) => {
        state.detailStatus = "failed";
        state.error = action.error.message;
      });
  },
});
export default projectSlice.reducer;
