import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";

const initialState = {
  data: [],
  detailData: {},
  status: "idle",
  delStatus: "idle",
  detailStatus: "idle",
  error: null,
  //
};
export const createNotification = createAsyncThunk(
  "/notification/create",
  async (request) => {
    const response = await api("POST", "/class/post", request);
    return response.data;
  }
);
export const getNotificationList = createAsyncThunk(
  "/notificationList",
  async (bootcampId) => {
    const response = await api("GET", `/class/post/${bootcampId}/NOTIFICATION`);
    return response.data;
  }
);
export const getQNAList = createAsyncThunk("/QNAList", async (bootcampId) => {
  const response = await api("GET", `/class/post/${bootcampId}/QNA`);
  return response.data;
});

export const getNotification = createAsyncThunk(
  "/notification",
  async (postId) => {
    const response = await api("GET", `/class/post/${postId}`);
    return response.data;
  }
);
export const deleteNotification = createAsyncThunk(
  "/delete/notification",
  async (postId) => {
    const response = await api("DELETE", `/class/post/${postId}`);
    return response.data;
  }
);

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducer: {},
  extraReducers(builder) {
    builder
      .addCase(createNotification.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(createNotification.fulfilled, (state, action) => {
        state.status = "successed";
        state.data.push(action.payload);
      })
      .addCase(createNotification.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getNotificationList.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getNotificationList.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = action.payload;
      })
      .addCase(getNotificationList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })  
      .addCase(getQNAList.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getQNAList.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = action.payload;
      })
      .addCase(getQNAList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
    
      .addCase(getNotification.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getNotification.fulfilled, (state, action) => {
        state.status = "successed";
        state.detailData = action.payload;
      })
      .addCase(getNotification.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteNotification.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(deleteNotification.fulfilled, (state, action) => {
        state.status = "successed";
      })
      .addCase(deleteNotification.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export default notificationSlice.reducer;
