import ManagerSideBar from "../../sidebar/ManagerSideBar";
import ClassEditForm from "./ClassEditForm";

const ClassEdit = () => {
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="flex w-5/6 h-5/6 justify-center">
        <ManagerSideBar />
        <ClassEditForm />
      </div>
    </div>
  );
};

export default ClassEdit;
