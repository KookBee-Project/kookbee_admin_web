import { configureStore } from "@reduxjs/toolkit";

import adminSlice from "./admin/adminSlice";
import SignUpSlice from "./admin/SignUpSlice";
import curriculumSlice from "./curriculum/curriculumSlice";
import campusSlice from "./campus/campusSlice";
import bootcampSlice from "./bootcamp/bootcampSlice";

export default configureStore({
  reducer: {
    admin: adminSlice,
    signUp: SignUpSlice,
    bootCamp: bootcampSlice,
    curriculum: curriculumSlice,
    campus: campusSlice,
  },
});
