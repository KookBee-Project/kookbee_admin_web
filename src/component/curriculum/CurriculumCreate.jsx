import ManagerSideBar from "../../sidebar/ManagerSideBar";
import CurriculumCreateForm from "./CurriculumCreateForm";

const CurriculumCreate = () => {
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="flex w-5/6 h-5/6 justify-center">
        <ManagerSideBar />
        <CurriculumCreateForm />
      </div>
    </div>
  );
};

export default CurriculumCreate;
