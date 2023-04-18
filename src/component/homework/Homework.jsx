import { Outlet } from "react-router-dom";
import TeacherSideBar from "../../sidebar/TeacherSideBar";
import ClassHistoryList from "../class/ClassHistoryList";
import BootcampHistoryList from "./BootcampList";

const Homework = () => {
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="flex w-5/6 h-5/6 justify-center">
        <TeacherSideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default Homework;
