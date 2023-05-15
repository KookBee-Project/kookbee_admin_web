import TeacherSideBar from "../../sidebar/TeacherSideBar";
import TeacherProjectListItem from "./TeacherProjectListItem";

const TeacherProjectList = () => {
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="flex w-5/6 h-5/6 justify-center">
        <TeacherSideBar />
        <TeacherProjectListItem />
      </div>
    </div>
  );
};
export default TeacherProjectList;
