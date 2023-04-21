import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api_bootcamp } from "../../api/api";

const initialState = {
  data: [],
  detailData: {},
  status: "idle",
  delStatus: "idle",
  detailStatus: "idle",
  error: null,
};

export const createBootcamp = createAsyncThunk(
  "/bootcamp/create",
  async (request) => {
    const response = await api_bootcamp("POST", "/bootcamp", request);
    return response.data;
  }
);
export const updateBootcamp = createAsyncThunk(
  "/bootcamp/update",
  async (request) => {
    const response = await api_bootcamp("PUT", "/bootcamp", request);
    return response.data;
  }
);
export const deleteBootcampStatus = createAsyncThunk(
  "/bootcamp/status/update",
  async (request) => {
    const response = await api_bootcamp("DELETE", `/bootcamp/status/`, request);
    return response.data;
  }
);

export const readBootcampList = createAsyncThunk(
  "/bootcamp/read/list",
  async () => {
    const response = await api_bootcamp("GET", "/bootcamp/manager");
    return response.data;
  }
);

// 바뀔수도 있음
export const readBootcampDetail = createAsyncThunk(
  "/bootcamp/read/detail",
  async (bootcampId) => {
    const response = await api_bootcamp("GET", `/bootcamp/${bootcampId}`);
    console.log(response.data);
    return response.data;
  }
);

const bootcampSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(createBootcamp.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(createBootcamp.fulfilled, (state, action) => {
        state.status = "successed";
        state.detailData = action.payload;
      })
      .addCase(createBootcamp.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateBootcamp.pending, (state, action) => {
        state.detailStatus = "loading";
      })
      .addCase(updateBootcamp.fulfilled, (state, action) => {
        state.detailStatus = "successed";
        state.detailData = action.payload;
      })
      .addCase(updateBootcamp.rejected, (state, action) => {
        state.detailStatus = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteBootcampStatus.pending, (state, action) => {
        state.delStatus = "loading";
      })
      .addCase(deleteBootcampStatus.fulfilled, (state, action) => {
        state.delStatus = "successed";
      })
      .addCase(deleteBootcampStatus.rejected, (state, action) => {
        state.delStatus = "failed";
        state.error = action.error.message;
      })
      .addCase(readBootcampList.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(readBootcampList.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = action.payload;
      })
      .addCase(readBootcampList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(readBootcampDetail.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(readBootcampDetail.fulfilled, (state, action) => {
        state.status = "successed";
        state.detailData = action.payload;
      })
      .addCase(readBootcampDetail.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export default bootcampSlice.reducer;
