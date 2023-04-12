import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const managerSignUp = createAsyncThunk(
  "admin/manager/signup",
  async (manager) => {
    const response = await api("POST", "/admin/manager/signup", manager);
    return response.data;
  }
);

export const teacherSignUp = createAsyncThunk(
  "admin/teacher/signup",
  async (manager) => {
    const response = await api("POST", "/admin/teacher/signup", manager);
    return response.data;
  }
);

export const checkCode = createAsyncThunk(
  "company/companycode",
  async (code) => {
    const response = await api("POST", "/company/companycode", code);
    const response2 = await api("POST", "/campus/companyname", {
      companyId: response.data,
    });
    console.log(response2);
    return response2.data;
  }
);

const signUp = createSlice({
  name: "signUp",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(managerSignUp.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(managerSignUp.fulfilled, (state, action) => {
        state.status = "successed";
        console.log(action.payload);
        state.data = action.payload;
      })
      .addCase(managerSignUp.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(teacherSignUp.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(teacherSignUp.fulfilled, (state, action) => {
        state.status = "successed";
        console.log(action.payload);
        state.data = action.payload;
      })
      .addCase(teacherSignUp.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(checkCode.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(checkCode.fulfilled, (state, action) => {
        state.status = "successed";
        console.log(action.payload);
        state.data = action.payload;
      })
      .addCase(checkCode.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export default signUp.reducer;
