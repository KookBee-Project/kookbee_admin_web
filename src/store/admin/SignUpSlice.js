import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";

const initialState = {
  data: [],
  company: {},
  signUpRes: "",
  status: "idle",
  error: null,
};

export const managerSignUp = createAsyncThunk(
  "admin/manager/signup",
  async (manager) => {
    console.log(manager);
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

export const getCompany = createAsyncThunk(
  "campus/companycode",
  async (code) => {
    const response = await api("POST", "/company/companycode", code);
    console.log(response.data);
    return response.data;
  }
);

export const checkCode = createAsyncThunk(
  "company/companycode",
  async (companyId) => {
    const response = await api("POST", "/campus/companyname", { companyId });
    console.log(response.data);
    return response.data;
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
        state.signUpRes = action.payload;
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
        state.signUpRes = action.payload;
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
      })
      .addCase(getCompany.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getCompany.fulfilled, (state, action) => {
        state.status = "successed";
        console.log(action.payload);
        state.company = action.payload;
      })
      .addCase(getCompany.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        state.data = [];
        state.company = {};
      });
  },
});
export default signUp.reducer;
