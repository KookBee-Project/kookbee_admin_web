import TeacherSideBar from "../../sidebar/TeacherSideBar";
import TeacherBootcampListItem from "./TeacherBootcampLIstItem";

const TeacherBootcampList = () => {
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="flex w-5/6 h-5/6 justify-center">
        <TeacherSideBar />
        <TeacherBootcampListItem />
      </div>
    </div>
  );
};

export default TeacherBootcampList;
