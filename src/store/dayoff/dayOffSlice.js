import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";

const initialState = {
  data: [],
  listData: [],
  status: "idle",
  error: null,
};

export const updateDayOffStasus = createAsyncThunk(
  "class/dayoffDetail/modify",
  async ({ request, dayOffId }) => {
    const response = await api(
      "PUT",
      `class/dayoff/admin/${dayOffId}`,
      request
    );
    return response.data;
  }
);

export const getDayOffListForManager = createAsyncThunk(
  "class/dayoff/manager",
  async () => {
    const response = await api("GET", "class/dayoff/admin/manager");
    return response.data;
  }
);

export const getDayOffListForTeacher = createAsyncThunk(
  "class/dayoff/teacher",
  async () => {
    const response = await api("GET", "class/dayoff/admin/teacher");
    return response.data;
  }
);

export const getDayOffDetail = createAsyncThunk(
  "class/dayoffDetail",
  async (dayOffId) => {
    const response = await api("GET", `class/dayoff/admin/${dayOffId}`);
    return response.data;
  }
);

const dayOffSlice = createSlice({
  name: "dayOff",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(updateDayOffStasus.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(updateDayOffStasus.fulfilled, (state, action) => {
        state.status = "successed";
      })
      .addCase(updateDayOffStasus.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getDayOffListForManager.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getDayOffListForManager.fulfilled, (state, action) => {
        state.status = "successed";
        state.listData = action.payload;
      })
      .addCase(getDayOffListForManager.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getDayOffListForTeacher.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getDayOffListForTeacher.fulfilled, (state, action) => {
        state.status = "successed";
        state.listData = action.payload;
      })
      .addCase(getDayOffListForTeacher.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getDayOffDetail.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getDayOffDetail.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = action.payload;
      })
      .addCase(getDayOffDetail.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export default dayOffSlice.reducer;
