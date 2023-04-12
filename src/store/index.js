import { configureStore } from "@reduxjs/toolkit";

import adminSlice from "./admin/adminSlice";
import SignUpSlice from "./admin/SignUpSlice";

export default configureStore({
  reducer: {
    admin: adminSlice,
    signUp: SignUpSlice,
  },
});
