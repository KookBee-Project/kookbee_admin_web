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

// export const updateCurriculum = createAsyncThunk(
//   "/curriculum/update",
//   async (request) => {
//     const response = await api("PUT", "/curriculum", request);
//     return response.data;
//   }
// );

// export const readCurriculum = createAsyncThunk(
//   "/curriculum/read",
//   async (classId) => {
//     const response = await api("GET", `/curriculum/${classId}`);
//     return response.data;
//   }
// );

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
    //   .addCase(readCurriculum.pending, (state, action) => {
    //     state.status = "loading";
    //   })
    //   .addCase(readCurriculum.fulfilled, (state, action) => {
    //     state.status = "successed";
    //     state.data = action.payload;
    //   })
    //   .addCase(readCurriculum.rejected, (state, action) => {
    //     state.status = "failed";
    //     state.error = action.error.message;
    //   });
  },
});
export default dayOffSlice.reducer;
