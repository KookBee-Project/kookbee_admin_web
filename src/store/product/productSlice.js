import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";

const initialState = {
  data: [],
  bootcampList: [],
  campusList: [],
  itemList: [],
  status: "idle",
  error: null,
};

export const getBootcampusList = createAsyncThunk(
  "/product/bootcamplist",
  async () => {
    const response = await api("GET", "/class/product/bootcamplist");
    return response.data;
  }
);

export const getManagerCampusList = createAsyncThunk(
  "/user/admin/manager/campuslist",
  async () => {
    const response = await api("GET", "/user/admin/manager/campuslist");
    return response.data;
  }
);

export const postProductItems = createAsyncThunk(
  "/class/product/productitems", async(request) => {
    const response = await api("POST", "/class/product/productitems", request);
    return response.data;
  }
)

export const getProductItems = createAsyncThunk(
  "/class/product/productlist", async(campusName) => {
    const response = await api("GET", `/class/product/productlist/${campusName}`);
    return response.data;
  }
)

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
      })
      .addCase(getManagerCampusList.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getManagerCampusList.fulfilled, (state, action) => {
        state.status = "successed";
        state.campusList = action.payload;
      })
      .addCase(getManagerCampusList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(postProductItems.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(postProductItems.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = action.payload;
      })
      .addCase(postProductItems.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getProductItems.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getProductItems.fulfilled, (state, action) => {
        state.status = "successed";
        state.itemList = action.payload;
      })
      .addCase(getProductItems.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      ;
  },
});
export default productSlice.reducer;
