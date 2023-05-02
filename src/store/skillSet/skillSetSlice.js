import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const getSkillSetList = createAsyncThunk("/skillSet/get", async () => {
  const response = await api("GET", "/class/skill_set");
  return response.data;
});

const skillSetSlice = createSlice({
  name: "skillSet",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getSkillSetList.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getSkillSetList.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = action.payload;
      })
      .addCase(getSkillSetList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export default skillSetSlice.reducer;
