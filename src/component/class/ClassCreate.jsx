import ManagerSideBar from "../../sidebar/ManagerSideBar";
import ClassCreateForm from "./ClassCreateForm";

const ClassCreate = () => {
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="flex w-5/6 h-5/6 justify-center">
        <ManagerSideBar />
        <ClassCreateForm />
      </div>
    </div>
  );
};

export default ClassCreate;
