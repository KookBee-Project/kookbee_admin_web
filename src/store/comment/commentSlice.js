import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";

const initialState = {
  data: [],
  detailData: [],
  status: "idle",
  delStatus: "idle",
  detailStatus: "idle",
  error: null,
  //
};
export const createComment = createAsyncThunk(
  "/notification/create",
  async (request) => {
    const response = await api("POST", `/comment/${postID}`, request);
    return response.data;
  }
);

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducer: {},
  extraReducers(builder) {
    builder
      .addCase(createComment.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(createComment.fulfilled, (state, action) => {
        state.status = "successed";
        state.data.push(action.payload);
      })
      .addCase(createComment.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export default commentSlice.reducer;
