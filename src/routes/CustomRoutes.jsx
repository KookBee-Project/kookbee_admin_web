import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../component/main";
import Login from "../component/admin/Login";
import SignUp from "../component/admin/SignUp";
import ClassCreate from "../component/class/ClassCreate";
import ClassHistory from "../component/class/ClassHistory";
import ClassEdit from "../component/class/ClassEdit";
import CurriculumCreate from "../component/curriculum/CurriculumCreate";
import BootcampHistory from "../component/homework/Homework";
import BootcampHistoryList from "../component/homework/BootcampList";
import ClassHistoryList from "../component/class/ClassHistoryList";
import Homework from "../component/homework/Homework";
import BootcampList from "../component/homework/BootcampList";
import HomeworkList from "../component/homework/HomeworkList";

const CustomRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/bootcamp/open" element={<ClassCreate />} />
          <Route path="/bootcamp" element={<ClassHistory />} />
          <Route path="/bootcamp/edit/:bootcampId" element={<ClassEdit />} />
          <Route
            path="/curriculum/create/:bootcampId"
            element={<CurriculumCreate />}
          />

          <Route path="homework/" element={<Homework />}>
            <Route path="" element={<BootcampList />} />
            <Route path=":bootcampId" element={<HomeworkList />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRoute;
