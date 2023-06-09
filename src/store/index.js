import { configureStore } from "@reduxjs/toolkit";

import adminSlice from "./admin/adminSlice";
import SignUpSlice from "./admin/SignUpSlice";
import curriculumSlice from "./curriculum/curriculumSlice";
import campusSlice from "./campus/campusSlice";
import bootcampSlice from "./bootcamp/bootcampSlice";
import skillSetSlice from "./skillSet/skillSetSlice";
import dayOffSlice from "./dayoff/dayOffSlice";
import homeworkSlice from "./homework/homeworkSlice";
import productSlice from "./product/productSlice";
import notificationSlice from "./notification/notificationSlice";
import projectSlice from "./project/projectSlice";

export default configureStore({
  reducer: {
    admin: adminSlice,
    signUp: SignUpSlice,
    bootCamp: bootcampSlice,
    curriculum: curriculumSlice,
    campus: campusSlice,
    skillSet: skillSetSlice,
    homework: homeworkSlice,
    dayOff: dayOffSlice,
    product: productSlice,
    notification: notificationSlice,
    project: projectSlice,
  },
});
