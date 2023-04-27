import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";

const initialState = {
  data: [],
  bootcampList: [],
  campusList: [],
  itemList: [],
  studentList: [],
  productItemList: [],
  productItemCount: {},
  status: "idle",
  error: null,
};

export const getBootcampList = createAsyncThunk(
  "/product/bootcamplist",
  async () => {
    const response = await api("GET", "/class/product/bootcamplist");
    console.log(response.data);
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

export const getStudentList = createAsyncThunk(
  "/class/product/studentlist", async(bootcampId) => {
    const response = await api("GET", `/class/product/studentlist/${bootcampId}`);
    return response.data;
  }
)

export const getProductItemList = createAsyncThunk(
  "/calss/product/productitemlist/${bootcampId}", async(bootcampId) => {
    const response = await api("GET", `/class/product/productitemlist/${bootcampId}`);
    return response.data;
  }
)

export const getProductItemCount = createAsyncThunk(
  "/class/product/productitemcount/{productItemId}", async() => {
    const response = await api("GET", `/class/product/productitemcount/${productItemId}`);
    return response.data;
  }
)

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getBootcampList.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getBootcampList.fulfilled, (state, action) => {
        state.status = "successed";
        state.bootcampList = action.payload;
      })
      .addCase(getBootcampList.rejected, (state, action) => {
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
      .addCase(getStudentList.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getStudentList.fulfilled, (state, action) => {
        state.status = "successed";
        state.studentList = action.payload;
      })
      .addCase(getStudentList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getProductItemList.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getProductItemList.fulfilled, (state, action) => {
        state.status = "successed";
        state.productItemList = action.payload;
      })
      .addCase(getProductItemList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getProductItemCount.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getProductItemCount.fulfilled, (state, action) => {
        state.status = "successed";
        state.productItemCount = action.payload;
      })
      .addCase(getProductItemCount.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      ;
  },
});
export default productSlice.reducer;
