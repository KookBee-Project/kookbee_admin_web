import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api_bootcamp } from "../../api/api";

const initialState = {
  data: [],
  bootcampList: [],
  status: "idle",
  error: null,
};

export const getBootcampusList = createAsyncThunk(
  "/product/bootcamplist",
  async () => {
    const response = await api_bootcamp("GET", "/product/bootcamplist");
    console.log(response.data);
    return response.data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getBootcampusList.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getBootcampusList.fulfilled, (state, action) => {
        state.status = "successed";
        state.bootcampList = action.payload;
      })
      .addCase(getBootcampusList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export default productSlice.reducer;
