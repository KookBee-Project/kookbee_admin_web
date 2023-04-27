import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../component/main";
import Login from "../component/admin/Login";
import SignUp from "../component/admin/SignUp";
import ClassCreate from "../component/class/ClassCreate";
import ClassHistory from "../component/class/ClassHistory";
import ClassEdit from "../component/class/ClassEdit";
import CurriculumCreate from "../component/curriculum/CurriculumCreate";
import Homework from "../component/homework/Homework";
import BootcampList from "../component/homework/BootcampList";
import HomeworkList from "../component/homework/HomeworkList";
import HomeworkDetail from "../component/homework/HomeworkDetail";
import HomeworkCreate from "../component/homework/HomeworkCreate";
import HomeworkAnswerDetail from "../component/homework/HomeworkAnswerDetail";
import Product from "../component/product/Product";
import BootcampListForProduct from "../component/product/BootcampListForProduct";
import ProductList from "../component/product/ProductList";
import ProductCreate from "../component/product/ProductCreate";
import ProductDetail from "../component/product/ProductDetail";
import DayOffApplyList from "../component/dayoff/DayOffApplyList";
import DayOff from "../component/dayoff/DayOff";
import DayOffApplyDetail from "../component/dayoff/DayOffApplyDetail";
import BootcampListForNotification from "../component/notification/BootcampListForNotification";
import Notification from "../component/notification/Notification";
import NotificationList from "../component/notification/NotificationList";
import NotificationCreate from "../component/notification/NotificationCreate";
import NotificationDetail from "../component/notification/NotificationDetail";

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
            <Route
              path=":bootcampId/:homeworkId"
              element={<HomeworkDetail />}
            />
            <Route
              path=":bootcampId/:homeworkId/:homeworkAnswerId"
              element={<HomeworkAnswerDetail />}
            />
            <Route path="open" element={<HomeworkCreate />} />
          </Route>

          <Route path="product/" element={<Product />}>
            <Route path="" element={<BootcampListForProduct />} />
            <Route path=":bootcampId" element={<ProductList />} />
            <Route path="insert" element={<ProductCreate />} />
            <Route path=":bootcampId/:productId" element={<ProductDetail />} />
          </Route>

          <Route path="notification/" element={<Notification />}>
            <Route path="" element={<BootcampListForNotification />} />
            <Route path=":bootcampId" element={<NotificationList />} />
            <Route path="insert/:bootcampId" element={<NotificationCreate />} />
            <Route
              path=":bootcampId/:notificationId"
              element={<NotificationDetail />}
            />
          </Route>

          <Route path="dayoff/" element={<DayOff />}>
            <Route path="" element={<DayOffApplyList />} />
            <Route path=":studentName" element={<DayOffApplyDetail />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRoute;
