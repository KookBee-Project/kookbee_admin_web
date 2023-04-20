import { Outlet } from "react-router-dom";
import TeacherSideBar from "../../sidebar/TeacherSideBar";

const DayOff = () => {
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="flex w-5/6 h-5/6 justify-center">
        <TeacherSideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default DayOff;
