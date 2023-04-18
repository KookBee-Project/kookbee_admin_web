import { configureStore } from "@reduxjs/toolkit";

import adminSlice from "./admin/adminSlice";
import SignUpSlice from "./admin/SignUpSlice";
import classSlice from "./class/classSlice";
import curriculumSlice from "./curriculum/curriculumSlice";

export default configureStore({
  reducer: {
    admin: adminSlice,
    signUp: SignUpSlice,
    bootCamp: classSlice,
    curriculum: curriculumSlice,
  },
});
