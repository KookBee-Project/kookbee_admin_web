import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";

const initialState = {
  data: {},
  status: "idle",
  error: null,
};

export const login = createAsyncThunk("/user/login", async (user, thunkAPI) => {
  try {
    const response = await api("POST", "/user/login", user);
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response);
  }
});

export const getUserType = createAsyncThunk(
  "/user/usertype",
  async (thunkAPI) => {
    try {
      const response = await api("GET", "/user/usertype");
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response);
    }
  }
);

export const getMe = createAsyncThunk("/user", async () => {
  const response = await api("GET", "/user");
  return response.data;
});

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = initialState.data;
      state.status = initialState.status;
      state.error = initialState.error;
      localStorage.clear();
      alert("정상적으로 로그아웃 되었습니다.");
    },
  },
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = action.payload;
        localStorage.setItem("RefreshToken", action.payload.refreshToken);
        localStorage.setItem("AccessToken", action.payload.accessToken);
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.data;
      })
      .addCase(getUserType.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getUserType.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = action.payload;
      })
      .addCase(getUserType.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.data;
      })
      .addCase(getMe.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getMe.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = action.payload;
      })
      .addCase(getMe.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.data;
      });
  },
});
export default adminSlice.reducer;
export const { logout } = adminSlice.actions;
