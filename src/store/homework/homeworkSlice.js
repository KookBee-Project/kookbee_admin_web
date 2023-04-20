import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api, api_bootcamp } from "../../api/api";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const createHomework = createAsyncThunk(
  "/homework/create",
  async (request) => {
    const response = await api_bootcamp("POST", "/homework", request);
    return response.data;
  }
);
export const createHomeworkComment = createAsyncThunk(
  "/homeworkComment/create",
  async (request) => {
    const response = await api_bootcamp("POST", "/homework/comment", request);
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

const homeworkSlice = createSlice({
  name: "homework",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(createHomework.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(createHomework.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = action.payload;
      })
      .addCase(createHomework.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createHomeworkComment.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(createHomeworkComment.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = action.payload;
      })
      .addCase(createHomeworkComment.rejected, (state, action) => {
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
export default homeworkSlice.reducer;
