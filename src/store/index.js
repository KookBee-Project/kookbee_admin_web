import { configureStore } from "@reduxjs/toolkit";
import SignUpSlice from "./admin/SignUpSlice";

export default configureStore({
  reducer: {
    signUp: SignUpSlice,
  },
});
