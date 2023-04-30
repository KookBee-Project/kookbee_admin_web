import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";

const initialState = {
  data: [],
  homeworkList: [],
  homeworkAnswerList: [],
  status: "idle",
  error: null,
};

export const createHomework = createAsyncThunk(
  "/homework/create",
  async (request) => {
    const response = await api("POST", "/class/homework", request);
    return response.data;
  }
);
export const createHomeworkComment = createAsyncThunk(
  "/homeworkComment/create",
  async (request) => {
    const response = await api("POST", "/class/homework/comment", request);
    return response.data;
  }
);
export const readHomeworkList = createAsyncThunk(
  "/homworkList/read",
  async (curriculumId) => {
    const response = await api("GET", `/class/homework/list/${curriculumId}`);
    return response.data;
  }
);

export const readHomeworkQuestionList = createAsyncThunk(
  "/homworkQuestionList/read",
  async (curriculumId) => {
    const response = await api("GET", `/class/homework/list/${curriculumId}`);
    return response.data;
  }
);

export const readHomeworkDetail = createAsyncThunk(
  "/homworkDetail/read",
  async (homeworkId) => {
    const response = await api("GET", `/class/homework/detail/${homeworkId}`);
    return response.data;
  }
);

export const readHomeworkAnswerList = createAsyncThunk(
  "/homwork/answer/list",
  async (homeworkQuestionId) => {
    const response = await api(
      "GET",
      `/class/homework/answer/list/${homeworkQuestionId}`
    );
    return response.data;
  }
);

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
      })
      .addCase(readHomeworkList.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(readHomeworkList.fulfilled, (state, action) => {
        state.status = "successed";
        state.homeworkList = action.payload;
      })
      .addCase(readHomeworkList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(readHomeworkDetail.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(readHomeworkDetail.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = action.payload;
      })
      .addCase(readHomeworkDetail.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(readHomeworkAnswerList.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(readHomeworkAnswerList.fulfilled, (state, action) => {
        state.status = "successed";
        state.homeworkAnswerList = action.payload;
      })
      .addCase(readHomeworkAnswerList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export default homeworkSlice.reducer;
