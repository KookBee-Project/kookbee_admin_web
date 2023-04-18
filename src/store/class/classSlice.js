import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";

const initialState = {
  data: [],
  detailData: {},
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
export const deleteClassStatus = createAsyncThunk(
  "/class/status/update",
  async (classId) => {
    const response = await api("DELETE", `/class/status/${classId}`);
    return response.data;
  }
);

export const readClassList = createAsyncThunk("/class/read/list", async () => {
  const response = await api("GET", "/class");
  return response.data;
});

// 바뀔수도 있음
export const readClassDetail = createAsyncThunk(
  "/class/read/detail",
  async (classId) => {
    const response = await api("GET", `/class/${classId}`);
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
      .addCase(deleteClassStatus.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(deleteClassStatus.fulfilled, (state, action) => {
        state.status = "successed";
      })
      .addCase(deleteClassStatus.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(readClassList.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(readClassList.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = action.payload;
      })
      .addCase(readClassList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(readClassDetail.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(readClassDetail.fulfilled, (state, action) => {
        state.status = "successed";
        state.detailData = action.payload;
      })
      .addCase(readClassDetail.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export default classSlice.reducer;
