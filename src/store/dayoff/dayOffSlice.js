import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api} from "../../api/api";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const updateDayOffStasus = createAsyncThunk(
  "/dayoff/create",
  async (request) => {
    const response = await api("POST", "/class/dayoff", request);
    return response.data;
  }
);

export const getDayOffList = createAsyncThunk(
  "class/dayoff",
  async () => {
    const response = await api("GET", "class/dayoff/admin");
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
        state.data = action.payload;
      })
      .addCase(updateDayOffStasus.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getDayOffList.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getDayOffList.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = action.payload;
      })
      .addCase(getDayOffList.rejected, (state, action) => {
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
    //   .addCase(updateCurriculum.pending, (state, action) => {
    //     state.status = "loading";
    //   })
    //   .addCase(updateCurriculum.fulfilled, (state, action) => {
    //     state.status = "successed";
    //     state.data = action.payload;
    //   })
    //   .addCase(updateCurriculum.rejected, (state, action) => {
    //     state.status = "failed";
    //     state.error = action.error.message;
    //   })
      
  },
});
export default dayOffSlice.reducer;
