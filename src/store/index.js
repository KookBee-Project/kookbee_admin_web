import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "./admin/adminSlice";

export default configureStore({
  reducer: {
    admin: adminSlice,
  },
});
