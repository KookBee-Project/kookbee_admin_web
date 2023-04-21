import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";

const initialState = {
  data: [],
  managerCampus: [],
  companyId: 0,
  status: "idle",
  error: null,
};

export const getManagerCampus = createAsyncThunk(
  "/campus/manager/get",
  async () => {
    const response = await api("GET", "/user/campus/manager");
    console.log(response.data);
    return response.data;
  }
);

const campusSlice = createSlice({
  name: "campus",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getManagerCampus.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getManagerCampus.fulfilled, (state, action) => {
        state.status = "successed";
        console.log(action.payload);
        state.managerCampus = action.payload.managerCampusList;
        state.companyId = action.payload.companyId;
      })
      .addCase(getManagerCampus.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export default campusSlice.reducer;
