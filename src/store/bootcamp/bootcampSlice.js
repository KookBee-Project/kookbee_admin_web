import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";

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
    const response = await api("POST", "/class/bootcamp", request);
    return response.data;
  }
);
export const updateBootcamp = createAsyncThunk(
  "/bootcamp/update",
  async ({ request, curriculumReq, delCurriculumReq }) => {
    const response = await api("PUT", "/class/bootcamp", request);
    const response2 = await api("PUT", "/class/curriculum", curriculumReq);
    const response3 = await api(
      "DELETE",
      `/class/curriculum`,
      delCurriculumReq
    );
    return response.data;
  }
);
export const deleteBootcampStatus = createAsyncThunk(
  "/bootcamp/status/update",
  async ({ bootcampId, curriculumIds }) => {
    const response2 = await api("DELETE", `/class/curriculum`, curriculumIds);
    // return response.data;
    const response = await api(
      "DELETE",
      `/class/bootcamp/${bootcampId}`,
      bootcampId
    );
    return response.data;
  }
);

export const readBootcampList = createAsyncThunk(
  "/bootcamp/read/list",
  async () => {
    const response = await api("GET", "/class/bootcamp/manager");
    return response.data;
  }
);

export const readBootcampListByTeacher = createAsyncThunk(
  "/bootcamp/teacher/read/list",
  async () => {
    const response = await api("GET", "/class/bootcamp/teacher");
    return response.data;
  }
);

// 바뀔수도 있음
export const readBootcampDetail = createAsyncThunk(
  "/bootcamp/read/detail",
  async (bootcampId) => {
    const response = await api("GET", `/class/bootcamp/${bootcampId}`);
    return response.data;
  }
);

const bootcampSlice = createSlice({
  name: "bootcamp",
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
      .addCase(readBootcampListByTeacher.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(readBootcampListByTeacher.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = action.payload;
      })
      .addCase(readBootcampListByTeacher.rejected, (state, action) => {
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
