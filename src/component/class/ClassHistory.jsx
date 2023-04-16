import SideBar from "../../sidebar/ManagerSideBar";
import ClassHistoryList from "./ClassHistoryList";

const ClassHistory = () => {
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="flex w-5/6 h-5/6 border-4 border-yellow-300">
        <SideBar />
        <ClassHistoryList/>
      </div>
    </div>
  );
};

export default ClassHistory;
